import Link from "next/link";

import { postRepository } from "@/domains/post/repositories";
import type { PostCategory } from "@/domains/post/types";
import { SITE } from "@/lib/constants/site";

const categoryLabels: Record<PostCategory, string> = {
  comfort: "위로",
  relationship: "관계",
  growth: "성장",
  daily: "일상",
  love: "사랑",
};

export default async function Home() {
  const featuredQuotes = await postRepository.getFeatured();

  return (
    <main>
      {/* Hero */}
      <section className="container flex min-h-[680px] flex-col items-center justify-center text-center">
        <p className="mb-10 text-[10px] tracking-[0.35em] text-muted">
          A LETTER TO YOURSELF
        </p>

        <h1 className="whitespace-pre-line text-balance text-4xl font-normal leading-[1.7] tracking-[-0.04em] sm:text-5xl md:text-6xl">
          오늘도 충분히{"\n"}
          잘하고 있어.
        </h1>

        <p className="mt-8 whitespace-pre-line text-sm leading-[2.2] tracking-wide text-foreground-secondary md:text-base">
          조금 느려도 괜찮아.
          {"\n"}
          너만의 속도로 걸어가면 돼.
        </p>

        <Link
          href="/archive"
          className="mt-14 border border-border px-8 py-4 text-xs tracking-[0.15em] transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
        >
          글귀 둘러보기 →
        </Link>

        <div className="mt-24 flex flex-col items-center gap-3">
          <span className="h-10 w-px bg-border" />
          <span className="text-[9px] tracking-[0.3em] text-muted">
            SCROLL TO EXPLORE
          </span>
        </div>
      </section>

      {/* Brand Message */}
      <section className="border-y border-border bg-surface">
        <div className="container section-spacing flex flex-col items-center text-center">
          <p className="mb-8 text-[10px] tracking-[0.3em] text-muted">
            A SMALL LETTER
          </p>

          <h2 className="whitespace-pre-line text-xl font-normal leading-[2] tracking-wide md:text-2xl">
            모든 하루가 완벽할 필요는 없어.
            {"\n"}
            당신의 오늘도 충분히 소중하니까.
          </h2>

          <p className="mt-8 text-xs tracking-widest text-muted">— 감성글</p>
        </div>
      </section>

      {/* Featured Quotes */}
      <section className="container section-spacing">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="mb-3 text-[10px] tracking-[0.3em] text-muted">
              SELECTED LETTERS
            </p>
            <h2 className="text-2xl font-normal tracking-wide">
              마음에 남는 문장
            </h2>
          </div>

          <Link
            href="/archive"
            className="text-xs tracking-wide text-muted transition-colors hover:text-foreground"
          >
            전체 보기 ↗
          </Link>
        </div>

        {featuredQuotes.length === 0 ? (
          <p className="py-20 text-center text-sm text-muted">
            아직 등록된 추천 게시글이 없습니다.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {featuredQuotes.map((post, index) => (
              <Link
                key={post.id}
                href={`/archive/${post.slug}`}
                className="group"
              >
                <article className="flex min-h-[320px] flex-col items-center justify-center border border-border bg-surface p-8 text-center transition-colors hover:bg-surface-hover">
                  <span className="mb-10 text-[10px] tracking-[0.25em] text-muted">
                    0{index + 1} / {categoryLabels[post.category]}
                  </span>

                  <p className="whitespace-pre-line text-base leading-[2.2] tracking-wide text-foreground-secondary transition-colors group-hover:text-foreground">
                    {post.excerpt}
                  </p>

                  <span className="mt-10 text-[10px] tracking-widest text-muted">
                    감성글
                  </span>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Instagram CTA */}
      <section className="border-t border-border">
        <div className="container section-spacing flex flex-col items-center text-center">
          <p className="mb-6 text-[10px] tracking-[0.3em] text-muted">
            STAY CONNECTED
          </p>

          <h2 className="text-2xl font-normal tracking-wide md:text-3xl">
            조금 더 많은 이야기를 만나보세요.
          </h2>

          <p className="mt-5 text-sm text-muted">
            매일의 작은 문장들을 Instagram에서 이어갑니다.
          </p>

          <a
            href={SITE.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 border border-border px-8 py-4 text-xs tracking-[0.15em] transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            INSTAGRAM 방문하기 ↗
          </a>
        </div>
      </section>
    </main>
  );
}
