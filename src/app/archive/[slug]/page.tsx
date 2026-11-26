import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { postRepository } from "@/domains/post/repositories";
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
    image: post.image,
  });

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <article>
        <header className="mb-12">
          <p className="mb-4 text-xs text-muted">
            {post.category.toUpperCase()}
          </p>

          <h1 className="text-3xl font-normal leading-relaxed">{post.title}</h1>

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
          <figure className="mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.imageAlt}
              className="h-auto w-full object-cover"
            />
          </figure>
        )}

        <div className="whitespace-pre-wrap text-sm leading-8 text-secondary">
          {post.content}
        </div>

        {post.instagramUrl && (
          <a
            href={post.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block text-sm underline underline-offset-4"
          >
            Instagram에서 보기
          </a>
        )}
      </article>
    </main>
  );
}
