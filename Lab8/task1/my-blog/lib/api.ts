import { Author, Post } from "@/types";

const authors: Author[] = [
  {
    id: "1",
    name: "John Doe",
    bio: "Tech writer",
    avatar: "/avatars/john.jpg",
  },
  {
    id: "2",
    name: "Jane Smith",
    bio: "React expert",
    avatar: "/avatars/jane.jpg",
  },
];

const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content:
      "Next.js is a React framework that enables server-side rendering, static site generation, and full-stack web development.",
    author: "1",
    date: "2026-03-01",
    tags: ["nextjs", "react"],
    readTime: 5,
  },
  {
    id: "2",
    title: "Understanding SSR and SSG",
    content:
      "Server-Side Rendering generates HTML on every request, while Static Site Generation creates HTML at build time.",
    author: "2",
    date: "2026-03-03",
    tags: ["ssr", "ssg", "performance"],
    readTime: 7,
  },
  {
    id: "3",
    title: "Incremental Static Regeneration",
    content:
      "ISR allows static pages to be regenerated after a specified interval without rebuilding the entire application.",
    author: "1",
    date: "2026-03-05",
    tags: ["isr", "nextjs"],
    readTime: 6,
  },
];

export async function getAllPosts(): Promise<Post[]> {
  return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
  return posts.find((post) => post.id === id);
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
  return authors.find((author) => author.id === id);
}