export const SITE = {
  name: "감성글",
  title: "감성글 | 마음에 남는 문장들",
  description:
    "하루 끝, 마음에 남는 한 문장 🌙. 이별과 그리움, 일상 속 작은 위로. 당신의 마음을 대신 적어드립니다. 매일 밤, 마음 한 페이지.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "ko_KR",
  language: "ko-KR",
  instagram: {
    username: "night.note__2",
    url: "https://www.instagram.com/night.note__2/",
  },
  author: "감성글",
} as const;
