import type { Metadata } from "next";
import Link from "next/link";

import { postRepository } from "@/domains/post/repositories";
import { POST_CATEGORY_LABELS } from "@/domains/post/types";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "아카이브",
  description:
    "감성글에 기록된 위로, 관계, 사랑, 일상과 성장에 관한 문장들을 모았습니다.",
  path: "/archive",
});

export default async function ArchivePage() {
  const posts = await postRepository.getAll();

  return (
    <main className="container min-h-[calc(100svh-12rem)] py-20 md:py-24">
      <div className="max-w-3xl">
        <header className="mb-16">
          <p className="mb-4 text-[11px] tracking-[0.3em] text-muted">
            ARCHIVE
          </p>

          <h1 className="font-serif text-3xl font-normal tracking-wide">
            마음에 남는 기록
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-secondary">
            지나간 감정과 오래 간직하고 싶은 문장들을 모았습니다.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="py-20 text-center text-sm text-muted">
            아직 등록된 게시글이 없습니다.
          </p>
        ) : (
          <section aria-label="게시글 목록" className="space-y-10">
            {posts.map((post) => (
              <article key={post.id} className="border-b border-border pb-10">
                <Link href={`/archive/${post.slug}`} className="group block">
                  <p className="mb-3 text-[11px] tracking-[0.18em] text-muted">
                    {POST_CATEGORY_LABELS[post.category]}
                  </p>

                  <h2 className="font-serif text-xl font-normal leading-relaxed transition-colors group-hover:text-secondary">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-secondary">
                    {post.excerpt}
                  </p>

                  <time
                    className="mt-5 block text-xs text-muted"
                    dateTime={post.publishedAt}
                  >
                    {new Date(post.publishedAt).toLocaleDateString("ko-KR")}
                  </time>
                </Link>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
