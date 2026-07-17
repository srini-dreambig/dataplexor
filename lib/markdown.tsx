import React from "react";

/**
 * Minimal markdown renderer for admin-authored post bodies.
 * Supports: ## / ### headings, paragraphs, unordered (-) and ordered (1.)
 * lists, blockquotes (>), **bold** and *italic* inline marks.
 * Renders through React elements only — no raw HTML injection.
 */

function inline(text: string, keyBase: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={`${keyBase}-b${i}`}>{token.slice(2, -2)}</strong>);
    } else {
      parts.push(<em key={`${keyBase}-i${i}`}>{token.slice(1, -1)}</em>);
    }
    last = match.index + token.length;
    i++;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function Markdown({ text }: { text: string }) {
  const blocks = text.split(/\n\s*\n/).filter((b) => b.trim());
  return (
    <>
      {blocks.map((block, bi) => {
        const lines = block.split("\n").map((l) => l.trim());
        const first = lines[0];

        if (first.startsWith("### ")) {
          return <h3 key={bi}>{inline(block.slice(4), `h3-${bi}`)}</h3>;
        }
        if (first.startsWith("## ")) {
          return <h2 key={bi}>{inline(block.slice(3), `h2-${bi}`)}</h2>;
        }
        if (first.startsWith("> ")) {
          return (
            <blockquote key={bi}>
              {inline(lines.map((l) => l.replace(/^>\s?/, "")).join(" "), `q-${bi}`)}
            </blockquote>
          );
        }
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={bi}>
              {lines.map((l, li) => (
                <li key={li}>{inline(l.slice(2), `ul-${bi}-${li}`)}</li>
              ))}
            </ul>
          );
        }
        if (lines.every((l) => /^\d+\.\s/.test(l))) {
          return (
            <ul key={bi}>
              {lines.map((l, li) => (
                <li key={li}>{inline(l.replace(/^\d+\.\s/, ""), `ol-${bi}-${li}`)}</li>
              ))}
            </ul>
          );
        }
        return <p key={bi}>{inline(lines.join(" "), `p-${bi}`)}</p>;
      })}
    </>
  );
}
