import type { Metadata } from "next";
import Link from "next/link";

import { createMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "감성글은 일상 속 감정과 마음에 남는 문장을 기록하는 콘텐츠 브랜드입니다. Instagram @night.note__2에서 더 많은 이야기를 만나보세요.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="container min-h-screen py-24">
      <header className="mx-auto max-w-2xl text-center">
        <p className="mb-8 text-[10px] tracking-[0.35em] text-muted">
          ABOUT US
        </p>

        <h1 className="text-3xl font-normal tracking-wide md:text-4xl">
          감성글
        </h1>

        <p className="mt-8 whitespace-pre-line text-sm leading-[2.2] tracking-wide text-foreground-secondary md:text-base">
          어떤 문장은 짧지만 오래 남습니다.
          {"\n"}
          무심코 지나쳤던 감정이 문장 하나로 선명해지기도 합니다.
        </p>
      </header>

      <section className="mx-auto mt-28 max-w-2xl border-y border-border py-16 text-center">
        <p className="mb-8 text-[10px] tracking-[0.3em] text-muted">
          OUR STORY
        </p>

        <h2 className="whitespace-pre-line text-xl font-normal leading-loose md:text-2xl">
          평범한 하루 속에서{"\n"}
          마음에 남는 순간들을 기록합니다.
        </h2>

        <p className="mt-8 text-sm leading-[2.2] text-secondary">
          감성글은 위로와 관계, 사랑과 일상, 성장에 관한 감정과 생각을 문장으로
          전하는 콘텐츠 브랜드입니다.
          <br />
          <br />
          누군가에게는 공감이 되고, 누군가에게는 작은 위로가 되는 글을 만들어
          갑니다.
        </p>
      </section>

      <section className="mx-auto mt-24 max-w-2xl text-center">
        <p className="mb-6 text-[10px] tracking-[0.3em] text-muted">FIND US</p>

        <h2 className="text-xl font-normal">Instagram</h2>

        <p className="mt-5 text-sm text-secondary">
          감성글의 새로운 문장과 이야기를 만나보세요.
        </p>

        <a
          href={SITE.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block border border-border px-8 py-4 text-xs tracking-[0.15em] transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
        >
          @{SITE.instagram.username} ↗
        </a>
      </section>

      <div className="mt-24 text-center">
        <Link
          href="/"
          className="text-xs tracking-widest text-muted transition-colors hover:text-foreground"
        >
          HOME으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
