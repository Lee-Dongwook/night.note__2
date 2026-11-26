import type { Post } from "@/domains/post/types";

export interface PostRepository {
  getAll(): Promise<Post[]>;
  getBySlug(slug: string): Promise<Post | null>;
  getFeatured(): Promise<Post[]>;
  getRecent(limit?: number): Promise<Post[]>;
}
