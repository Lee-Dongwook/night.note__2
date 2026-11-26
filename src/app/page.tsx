const featuredQuotes = [
  {
    category: "위로",
    content: "오늘 하루가 조금 아쉬웠어도,\n오늘은 여기까지면 충분해.",
    author: "새벽의 편지",
  },
  {
    category: "성장",
    content: "지금도 충분히 잘하고 있어.\n조금 느려도 괜찮아.",
    author: "새벽의 편지",
  },
  {
    category: "관계",
    content: "좋은 관계란,\n서로의 거리를 존중하는 것.",
    author: "새벽의 편지",
  },
];

const navigation = [
  { label: "HOME", href: "/" },
  { label: "ARCHIVE", href: "/archive" },
  { label: "ABOUT", href: "/about" },
];

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="container">
        <nav className="flex h-20 items-center justify-between border-b border-border">
          <a href="/" className="text-lg font-medium tracking-[0.12em]">
            새벽의 편지
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs tracking-[0.16em] text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xs tracking-[0.12em] text-foreground-secondary transition-colors hover:text-foreground"
            >
              INSTAGRAM ↗
            </a>
          </div>
        </nav>
      </header>

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

        <a
          href="/archive"
          className="mt-14 border border-border px-8 py-4 text-xs tracking-[0.15em] transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
        >
          글귀 둘러보기 →
        </a>

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

          <p className="mt-8 text-xs tracking-widest text-muted">
            — 새벽의 편지
          </p>
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

          <a
            href="/archive"
            className="text-xs tracking-wide text-muted transition-colors hover:text-foreground"
          >
            전체 보기 ↗
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {featuredQuotes.map((quote, index) => (
            <article
              key={quote.category}
              className="flex min-h-[320px] flex-col items-center justify-center border border-border bg-surface p-8 text-center transition-colors hover:bg-surface-hover"
            >
              <span className="mb-10 text-[10px] tracking-[0.25em] text-muted">
                0{index + 1} / {quote.category}
              </span>

              <p className="whitespace-pre-line text-base leading-[2.2] tracking-wide text-foreground-secondary">
                {quote.content}
              </p>

              <span className="mt-10 text-[10px] tracking-widest text-muted">
                {quote.author}
              </span>
            </article>
          ))}
        </div>
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
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-10 border border-border px-8 py-4 text-xs tracking-[0.15em] transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            INSTAGRAM 방문하기 ↗
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-5 py-10 text-center md:flex-row">
          <span className="text-sm tracking-[0.12em]">새벽의 편지</span>

          <span className="text-[10px] tracking-wide text-muted">
            당신의 오늘에 작은 위로가 되기를.
          </span>

          <span className="text-[10px] tracking-wider text-muted">
            © {new Date().getFullYear()} 새벽의 편지
          </span>
        </div>
      </footer>
    </main>
  );
}
