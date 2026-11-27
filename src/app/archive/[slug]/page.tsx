import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { postRepository } from "@/domains/post/repositories";
import { POST_CATEGORY_LABELS } from "@/domains/post/types";
import { createArticleStructuredData, createMetadata } from "@/lib/seo";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await postRepository.getAll();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await postRepository.getBySlug(slug);

  if (!post) {
    return createMetadata({
      title: "게시글을 찾을 수 없습니다",
      noIndex: true,
    });
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/archive/${post.slug}`,
    image: post.ogImage || post.image || "/images/og/default.png",
  });
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await postRepository.getBySlug(slug);

  if (!post) {
    notFound();
  }

  const structuredData = createArticleStructuredData({
    title: post.title,
    description: post.excerpt,
    path: `/archive/${post.slug}`,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    image: post.ogImage || post.image,
  });

  return (
    <main className="container min-h-screen py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <article className="mx-auto max-w-xl">
        <Link
          href="/archive"
          className="mb-10 inline-block text-xs tracking-wide text-muted transition-colors hover:text-foreground"
        >
          ← 아카이브로
        </Link>

        <header className="mb-12">
          <p className="mb-4 text-[11px] tracking-[0.18em] text-muted">
            {POST_CATEGORY_LABELS[post.category]}
          </p>

          <h1 className="font-serif text-2xl font-normal leading-[1.6] md:text-3xl">
            {post.title}
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-secondary">
            {post.excerpt}
          </p>

          <time
            className="mt-6 block text-xs text-muted"
            dateTime={post.publishedAt}
          >
            {new Date(post.publishedAt).toLocaleDateString("ko-KR")}
          </time>
        </header>

        {post.image && (
          <figure className="relative mb-12 aspect-4/5 w-full overflow-hidden border border-border bg-surface">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 576px"
              className="object-cover"
            />
          </figure>
        )}

        <div className="whitespace-pre-wrap font-serif text-base leading-[2.1] text-foreground">
          {post.content}
        </div>

        <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link
            href="/archive"
            className="text-xs tracking-wide text-muted transition-colors hover:text-foreground"
          >
            ← 아카이브 목록
          </Link>

          {post.instagramUrl && (
            <a
              href={post.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-wide text-accent underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Instagram에서 보기 ↗
            </a>
          )}
        </footer>
      </article>
    </main>
  );
}
