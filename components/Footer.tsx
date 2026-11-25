import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pb-20 md:pb-0">
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
                  <a
                    href="https://line.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#06C755] hover:underline"
                  >
                    公式LINEで予約・相談
                  </a>
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
                  〒270-1402 千葉県白井市平塚2741-2
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

      {/* スマホ画面専用：下部固定の電話・公式LINE予約バー */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-slate-200 bg-white/95 p-2 gap-2 backdrop-blur md:hidden shadow-lg">
        <a
          href="tel:047-497-0485"
          className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-700 bg-white py-3 text-sm font-bold text-emerald-800 active:bg-emerald-50"
        >
          <Phone className="h-4 w-4" />
          電話する
        </a>
        <a
          href="https://line.me"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-xl bg-[#06C755] py-3 text-sm font-bold text-white shadow-sm active:bg-[#05b34c]"
        >
          {/* LINEアイコン */}
          <svg
            className="h-5 w-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
          公式LINE予約
        </a>
      </div>
    </>
  );
}
