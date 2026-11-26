export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="mb-6 text-xs tracking-[0.3em] text-muted">
        404 / NOT FOUND
      </p>

      <h1 className="text-3xl font-normal tracking-wide">
        찾으시는 페이지가 없어요.
      </h1>

      <p className="mt-5 text-sm leading-relaxed text-secondary">
        페이지가 이동되었거나 존재하지 않는 주소예요.
      </p>

      <a
        href="/"
        className="mt-10 border border-border px-8 py-4 text-xs tracking-widest transition-colors hover:bg-foreground hover:text-background"
      >
        HOME으로 돌아가기
      </a>
    </main>
  );
}
