export type PostCategory =
  | "comfort"
  | "relationship"
  | "growth"
  | "daily"
  | "love";

export const POST_CATEGORY_LABELS: Record<PostCategory, string> = {
  comfort: "위로",
  relationship: "관계",
  growth: "성장",
  daily: "일상",
  love: "사랑",
};

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
