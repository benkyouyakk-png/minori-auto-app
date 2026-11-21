import React from "react";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded bg-emerald-700 px-2 py-0.5 text-[10px] font-bold text-white">
              関東運輸局長指定工場
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              千葉県白井市の車検・点検・鈑金塗装
            </span>
          </div>
          <Link href="/">
            <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 mt-0.5 hover:text-emerald-800 transition">
              有限会社 美野里自動車整備工場
            </h1>
          </Link>
        </div>

        {/* PC用ナビゲーション＆電話・予約ボタン */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5 text-sm font-medium text-slate-700">
            <Link href="/#services" className="hover:text-emerald-700">
              車検・整備メニュー
            </Link>
            <Link href="/#strengths" className="hover:text-emerald-700">
              選ばれる理由
            </Link>
            <Link href="/#access" className="hover:text-emerald-700">
              会社案内・アクセス
            </Link>
          </nav>

          <div className="flex items-center gap-3 border-l border-slate-200 pl-5">
            <div className="text-right">
              <div className="text-[11px] text-slate-500">
                営業時間 8:30〜17:30
              </div>
              <a
                href="tel:047-497-0485"
                className="text-lg font-extrabold text-emerald-800 hover:underline"
              >
                047-497-0485
              </a>
            </div>
            <Link
              href="/booking"
              className="flex items-center gap-1.5 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-800 transition"
            >
              <CalendarCheck className="h-4 w-4" />
              Web予約
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
