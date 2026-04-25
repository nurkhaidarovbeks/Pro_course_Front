import { GetStaticProps } from "next";
import Link from "next/link";

interface AboutProps {
  generatedAt: string;
}

export default function About({ generatedAt }: AboutProps) {
  return (
    <main className="container">
      <Link href="/">← Back to Home</Link>

      <section className="card">
        <h1>About Page — SSG</h1>

        <p>
          This page uses <strong>Static Site Generation</strong>.
        </p>

        <p>
          It is generated at build time and can be regenerated later because ISR
          is enabled.
        </p>

        <p>Generated at: {generatedAt}</p>
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  return {
    props: {
      generatedAt: new Date().toISOString(),
    },
    revalidate: 60,
  };
};