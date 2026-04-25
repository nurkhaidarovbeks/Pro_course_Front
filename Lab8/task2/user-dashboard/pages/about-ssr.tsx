import { GetServerSideProps } from "next";
import Link from "next/link";

interface AboutSSRProps {
  generatedAt: string;
}

export default function AboutSSR({ generatedAt }: AboutSSRProps) {
  return (
    <main className="container">
      <Link href="/">← Back to Home</Link>

      <section className="card">
        <h1>About Page — SSR</h1>

        <p>
          This page uses <strong>Server-Side Rendering</strong>.
        </p>

        <p>It is generated on every request.</p>

        <p>Generated at: {generatedAt}</p>
      </section>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<
  AboutSSRProps
> = async () => {
  return {
    props: {
      generatedAt: new Date().toISOString(),
    },
  };
};