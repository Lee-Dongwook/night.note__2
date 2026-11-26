export type PostCategory =
  | "comfort"
  | "relationship"
  | "growth"
  | "daily"
  | "love";

export type PostStatus = "draft" | "published";

export interface Post {
  id: string;
  slug: string;

  title: string;
  excerpt: string;
  content: string;

  category: PostCategory;

  image: string;
  imageAlt: string;
  ogImage?: string;

  publishedAt: string;
  updatedAt?: string;

  featured: boolean;
  status: PostStatus;

  instagramUrl?: string;
}
