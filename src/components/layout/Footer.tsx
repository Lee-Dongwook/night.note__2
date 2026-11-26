export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-5 py-10 text-center md:flex-row">
        <span className="text-sm tracking-[0.12em]">감성글</span>

        <span className="text-[10px] tracking-wide text-muted">
          당신의 오늘에 작은 위로가 되기를.
        </span>

        <span className="text-[10px] tracking-wider text-muted">
          © {new Date().getFullYear()} 감성글
        </span>
      </div>
    </footer>
  );
}
