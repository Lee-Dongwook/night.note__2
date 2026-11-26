import postsData from "@/data/posts/posts.json";
import type { Post } from "@/domains/post/types";
import type { PostRepository } from "./post.repository";

const posts = postsData as Post[];

const publishedPosts = (): Post[] => {
  return posts
    .filter((post) => post.status === "published")
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
};

export class JsonPostRepository implements PostRepository {
  async getAll(): Promise<Post[]> {
    return publishedPosts();
  }

  async getBySlug(slug: string): Promise<Post | null> {
    return publishedPosts().find((post) => post.slug === slug) ?? null;
  }

  async getFeatured(): Promise<Post[]> {
    return publishedPosts().filter((post) => post.featured);
  }

  async getRecent(limit = 6): Promise<Post[]> {
    return publishedPosts().slice(0, Math.max(0, limit));
  }
}

export const postRepository = new JsonPostRepository();
