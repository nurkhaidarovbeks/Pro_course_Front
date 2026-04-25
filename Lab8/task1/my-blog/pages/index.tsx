import { GetStaticProps } from "next";
import Link from "next/link";
import { Post } from "@/types";
import { getAllPosts } from "@/lib/api";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <main className="container">
      <h1>My Blog</h1>

      <p>
        This home page uses <strong>SSG</strong> with <strong>ISR</strong>.
      </p>

      <nav className="nav">
        <Link href="/about">About</Link>
      </nav>

      <ul className="postList">
        {posts.map((post) => (
          <li key={post.id} className="card">
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>

            <p>
              Author ID: {post.author} | {post.readTime} min read
            </p>

            <p>Date: {post.date}</p>

            <div>
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};