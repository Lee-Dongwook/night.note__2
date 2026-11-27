import Link from "next/link";

import { postRepository } from "@/domains/post/repositories";
import { POST_CATEGORY_LABELS } from "@/domains/post/types";
import { SITE } from "@/lib/constants/site";

function getFeaturedGridClass(count: number): string {
  if (count === 1) {
    return "mx-auto grid max-w-xl grid-cols-1";
  }

  if (count === 2) {
    return "mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2";
  }

  return "grid grid-cols-1 gap-4 md:grid-cols-3";
}

export default async function Home() {
  const featuredQuotes = await postRepository.getFeatured();

  return (
    <main>
      {/* Hero */}
      <section className="container flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center py-20 text-center">
        <p className="mb-8 text-[11px] tracking-[0.3em] text-muted">
          A LETTER TO YOURSELF
        </p>

        <h1 className="whitespace-pre-line text-balance font-serif text-4xl font-normal leading-[1.4] tracking-[-0.02em] sm:text-5xl md:text-6xl">
          오늘도 충분히{"\n"}
          잘하고 있어.
        </h1>

        <p className="mt-8 whitespace-pre-line text-sm leading-[2] tracking-wide text-secondary md:text-base">
          조금 느려도 괜찮아.
          {"\n"}
          너만의 속도로 걸어가면 돼.
        </p>

        <Link
          href="/archive"
          className="mt-12 border border-border px-8 py-4 text-xs tracking-[0.15em] transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
        >
          글귀 둘러보기 →
        </Link>

        <div className="mt-20 flex flex-col items-center gap-3">
          <span className="h-10 w-px bg-border" />
          <span className="text-[11px] tracking-[0.25em] text-muted">
            SCROLL TO EXPLORE
          </span>
        </div>
      </section>

      {/* Brand Message */}
      <section className="border-y border-border bg-surface">
        <div className="container section-spacing flex flex-col items-center text-center">
          <p className="mb-8 text-[11px] tracking-[0.3em] text-muted">
            A SMALL LETTER
          </p>

          <h2 className="whitespace-pre-line font-serif text-xl font-normal leading-[1.9] tracking-wide md:text-2xl">
            모든 하루가 완벽할 필요는 없어.
            {"\n"}
            당신의 오늘도 충분히 소중하니까.
          </h2>

          <p className="mt-8 text-xs tracking-widest text-muted">— 감성글</p>
        </div>
      </section>

      {/* Featured Quotes */}
      <section className="container section-spacing">
        <div className="mb-14 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[11px] tracking-[0.3em] text-muted">
              SELECTED LETTERS
            </p>
            <h2 className="font-serif text-2xl font-normal tracking-wide">
              마음에 남는 문장
            </h2>
          </div>

          <Link
            href="/archive"
            className="shrink-0 text-xs tracking-wide text-muted transition-colors hover:text-foreground"
          >
            전체 보기 ↗
          </Link>
        </div>

        {featuredQuotes.length === 0 ? (
          <p className="py-20 text-center text-sm text-muted">
            아직 등록된 추천 게시글이 없습니다.
          </p>
        ) : (
          <div className={getFeaturedGridClass(featuredQuotes.length)}>
            {featuredQuotes.map((post, index) => (
              <Link
                key={post.id}
                href={`/archive/${post.slug}`}
                className="group block"
              >
                <article className="flex min-h-[300px] flex-col items-center justify-center border border-border bg-surface p-8 text-center transition-colors hover:bg-surface-hover">
                  <span className="mb-10 text-[11px] tracking-[0.22em] text-muted">
                    0{index + 1} / {POST_CATEGORY_LABELS[post.category]}
                  </span>

                  <p className="whitespace-pre-line font-serif text-base leading-[2] tracking-wide text-secondary transition-colors group-hover:text-foreground md:text-lg">
                    {post.excerpt}
                  </p>

                  <span className="mt-10 text-[11px] tracking-widest text-muted">
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
          <p className="mb-6 text-[11px] tracking-[0.3em] text-muted">
            STAY CONNECTED
          </p>

          <h2 className="font-serif text-2xl font-normal tracking-wide md:text-3xl">
            조금 더 많은 이야기를 만나보세요.
          </h2>

          <p className="mt-5 text-sm text-secondary">
            매일의 작은 문장들을 Instagram에서 이어갑니다.
          </p>

          <a
            href={SITE.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 border border-accent px-8 py-4 text-xs tracking-[0.15em] text-accent transition-colors hover:border-accent hover:bg-accent hover:text-background"
          >
            INSTAGRAM 방문하기 ↗
          </a>
        </div>
      </section>
    </main>
  );
}
