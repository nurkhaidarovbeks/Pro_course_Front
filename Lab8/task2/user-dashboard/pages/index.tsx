import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <h1>Lab 8.2 — SSR User Dashboard</h1>

      <p>This project demonstrates SSR and SSG in Next.js Pages Router.</p>

      <nav className="nav">
        <Link href="/dashboard">Dashboard SSR</Link>
        <Link href="/about">About SSG</Link>
        <Link href="/about-ssr">About SSR</Link>
      </nav>
    </main>
  );
}