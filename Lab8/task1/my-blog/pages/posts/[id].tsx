import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Author, Post } from "@/types";
import { getAllPosts, getAuthorById, getPostById } from "@/lib/api";

interface PostPageProps {
  post: Post;
  author: Author;
}

export default function PostPage({ post, author }: PostPageProps) {
  return (
    <article className="container">
      <Link href="/">← Back to Home</Link>

      <h1>{post.title}</h1>

      <p>
        By <strong>{author.name}</strong> | {post.readTime} min read
      </p>

      <p>{author.bio}</p>

      <p>Date: {post.date}</p>

      <div>
        {post.tags.map((tag) => (
          <span key={tag} className="tag">
            #{tag}
          </span>
        ))}
      </div>

      <hr />

      <p>{post.content}</p>
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        id: post.id,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
}) => {
  const id = params?.id;

  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }

  const post = await getPostById(id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const author = await getAuthorById(post.author);

  if (!author) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      author,
    },
    revalidate: 60,
  };
};