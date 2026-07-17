import { Container } from "@/components/ui";
import { PageHero } from "@/components/sections";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero compact eyebrow="Legal" title={title} subtitle={`Last updated: ${updated}`} />
      <section>
        <Container className="py-16 sm:py-20">
          <div className="prose-dpx mx-auto max-w-3xl">{children}</div>
        </Container>
      </section>
    </>
  );
}
