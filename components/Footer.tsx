import React from "react";
import Link from "next/link";
import { Phone, CalendarCheck, MapPin, Clock, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {/* 1列目：会社情報 */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded bg-emerald-800/80 px-2.5 py-1 text-xs font-bold text-emerald-200">
                <ShieldCheck className="h-3.5 w-3.5" />
                関東運輸局長指定工場（指定番号 3-694）
              </div>
              <h2 className="text-lg font-extrabold text-white">
                有限会社 美野里自動車整備工場
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                創業40年以上の実績。軽自動車・普通車から大型特殊自動車・商業車の車検・法定点検・鈑金塗装まで幅広く対応しております。
              </p>
            </div>

            {/* 2列目：ナビゲーション */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white">メニュー</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-emerald-400 transition">
                    トップページ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-emerald-400 transition"
                  >
                    車検・整備メニュー
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#strengths"
                    className="hover:text-emerald-400 transition"
                  >
                    選ばれる理由
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#access"
                    className="hover:text-emerald-400 transition"
                  >
                    会社案内・アクセス
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booking"
                    className="font-semibold text-emerald-400 hover:underline"
                  >
                    24時間Web予約フォーム
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3列目：お問い合わせ・営業時間 */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white">
                お問い合わせ・営業時間
              </h3>
              <div className="space-y-2 text-sm">
                <a
                  href="tel:047-497-0485"
                  className="flex items-center gap-2 text-xl font-extrabold text-emerald-400 hover:underline"
                >
                  <Phone className="h-5 w-5" />
                  047-497-0485
                </a>
                <p className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                  営業時間：8:30〜17:30
                </p>
                <p className="flex items-start gap-2 text-xs text-slate-400">
                  <MapPin className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                  千葉県白井市
                </p>
              </div>
            </div>
          </div>

          {/* コピーライト */}
          <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
            &copy; 2026 有限会社 美野里自動車整備工場 All Rights Reserved.
          </div>

        </div>
      </footer>

      {/* スマホ画面専用：下部固定の電話・Web予約バー */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-slate-200 bg-white/95 p-2 gap-2 backdrop-blur md:hidden shadow-lg">
        <a
          href="tel:047-497-0485"
          className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-700 bg-white py-3 text-sm font-bold text-emerald-800 active:bg-emerald-50"
        >
          <Phone className="h-4 w-4" />
          電話する
        </a>
        <Link
          href="/booking"
          className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-700 py-3 text-sm font-bold text-white shadow-sm active:bg-emerald-800"
        >
          <CalendarCheck className="h-4 w-4" />
          Web予約
        </Link>
      </div>
    </>
  );
}
