import fs from "fs/promises";
import path from "path";
import { neon } from "@neondatabase/serverless";

/**
 * Content storage backend.
 *
 * - When `DATABASE_URL` is set (Neon Postgres), documents are stored in a
 *   `content_docs` table — required on Vercel, where the serverless
 *   filesystem is read-only and ephemeral.
 * - Otherwise documents live as JSON files in `content/` (local dev and
 *   self-hosted Node servers).
 *
 * On first read with an empty database, documents are seeded from the
 * bundled JSON files so a fresh deployment starts with full content.
 */

const CONTENT_DIR = path.join(process.cwd(), "content");

const dbUrl = process.env.DATABASE_URL || "";
export const dbEnabled = Boolean(dbUrl);

let tableReady: Promise<unknown> | null = null;

function sql() {
  return neon(dbUrl);
}

function ensureTable(): Promise<unknown> {
  if (!tableReady) {
    tableReady = sql()`
      CREATE TABLE IF NOT EXISTS content_docs (
        name text PRIMARY KEY,
        data jsonb NOT NULL,
        updated_at timestamptz NOT NULL DEFAULT now()
      )
    `.catch((err) => {
      tableReady = null;
      throw err;
    });
  }
  return tableReady;
}

async function readFileDoc<T>(name: string): Promise<T | undefined> {
  try {
    const raw = await fs.readFile(
      path.join(CONTENT_DIR, `${name}.json`),
      "utf8"
    );
    return JSON.parse(raw) as T;
  } catch {
    return undefined;
  }
}

async function dbRead<T>(name: string): Promise<T | undefined> {
  await ensureTable();
  const rows = (await sql()`
    SELECT data FROM content_docs WHERE name = ${name}
  `) as { data: T }[];
  return rows[0]?.data;
}

async function dbWrite(name: string, data: unknown): Promise<void> {
  await ensureTable();
  await sql()`
    INSERT INTO content_docs (name, data, updated_at)
    VALUES (${name}, ${JSON.stringify(data)}::jsonb, now())
    ON CONFLICT (name)
    DO UPDATE SET data = EXCLUDED.data, updated_at = now()
  `;
}

export async function readDoc<T>(name: string, fallback: T): Promise<T> {
  if (dbEnabled) {
    try {
      const stored = await dbRead<T>(name);
      if (stored !== undefined) return stored;
      const seed = await readFileDoc<T>(name);
      if (seed !== undefined) {
        await dbWrite(name, seed).catch(() => {});
        return seed;
      }
      return fallback;
    } catch {
      // Database unreachable — serve bundled content rather than erroring
      return (await readFileDoc<T>(name)) ?? fallback;
    }
  }
  return (await readFileDoc<T>(name)) ?? fallback;
}

export type MediaFile = { contentType: string; data: string };

const MEDIA_ID = /^[a-z0-9][a-z0-9-]{2,80}\.(jpg|jpeg|png|webp|gif)$/;

export function isValidMediaId(id: string): boolean {
  return MEDIA_ID.test(id);
}

/** Uploaded images live in the same content store, keyed `media/<id>`. */
export async function readMedia(id: string): Promise<MediaFile | undefined> {
  if (!isValidMediaId(id)) return undefined;
  const file = await readDoc<MediaFile | null>(`media-${id}`, null);
  return file ?? undefined;
}

export async function writeMedia(id: string, file: MediaFile): Promise<void> {
  if (!isValidMediaId(id)) throw new Error("Invalid media id");
  await writeDoc(`media-${id}`, file);
}

export async function writeDoc(name: string, data: unknown): Promise<void> {
  if (dbEnabled) {
    try {
      await dbWrite(name, data);
    } catch (err) {
      throw new Error(
        `Could not write to the content database (check DATABASE_URL): ${
          err instanceof Error ? err.message : "unknown error"
        }`
      );
    }
    return;
  }
  try {
    await fs.mkdir(CONTENT_DIR, { recursive: true });
    await fs.writeFile(
      path.join(CONTENT_DIR, `${name}.json`),
      JSON.stringify(data, null, 2) + "\n",
      "utf8"
    );
  } catch (err) {
    const code = (err as NodeJS.ErrnoException).code;
    if (code === "EROFS" || code === "EACCES" || code === "EPERM") {
      throw new Error(
        "Content storage is read-only. Set DATABASE_URL (Neon Postgres) so admin edits persist."
      );
    }
    throw err;
  }
}
