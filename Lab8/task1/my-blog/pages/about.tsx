import { GetStaticProps } from "next";
import Link from "next/link";

interface AboutProps {
  generatedAt: string;
}

export default function About({ generatedAt }: AboutProps) {
  return (
    <main className="container">
      <Link href="/">← Back to Home</Link>

      <h1>About This Blog</h1>

      <p>
        This page uses <strong>SSG</strong>. It is generated at build time and
        can be regenerated with ISR.
      </p>

      <p>Generated at: {generatedAt}</p>
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