import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "有限会社 美野里自動車整備工場 | 千葉県白井市の車検・点検・鈑金塗装",
  description: "創業40年以上の実績・国の指定整備工場（指定番号 3-694）。軽自動車から大型車まで対応。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 pb-20 md:pb-0">
        {/* 全ページ共通のヘッダー */}
        <Header />

        {/* 各ページの中身（page.tsx や booking/page.tsx がここに入る） */}
        <main className="flex-1">
          {children}
        </main>

        {/* 全ページ共通のフッター */}
        <Footer />
      </body>
    </html>
  );
}
