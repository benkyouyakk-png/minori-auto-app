import React from "react";
import { ShieldCheck, Wrench, CheckCircle2 } from "lucide-react";

export default function StrengthsSection() {
  return (
    <section
      id="strengths"
      className="scroll-mt-24 relative overflow-hidden py-16 px-4 mt-12 sm:mt-16"
    >
      {/* 背景画像とぼかしレイヤー */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[2px] scale-105"
        style={{ backgroundImage: "url('/back.jpg')" }}
      />
      {/* 白い半透明オーバーレイ */}
      <div className="absolute inset-0 bg-white/45" />

      {/* 前面のコンテンツ */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            OUR STRENGTHS
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            美野里自動車が愛される3つの理由
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* 1つ目のカード */}
          <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">
              国の「指定工場（民間車検場）」
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              関東運輸局長認証（3-2877）および指定工場（3-694）の資格を取得。自社工場内で車検の検査ラインを完備しているため、スピーディーな対応が可能です。
            </p>
          </div>

          {/* 2つ目のカード */}
          <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <Wrench className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">
              軽自動車から大型車まで対応
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              普通車・軽自動車の日常メンテナンスはもちろん、大型特殊自動車や商業車の整備・鈑金塗装まで幅広く対応できる設備と技術があります。
            </p>
          </div>

          {/* 3つ目のカード */}
          <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">
              創業70年以上の安心と明朗会計
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              「勝手に部品を交換されて高額になった」ということは一切ありません。事前にお見積もりを分かりやすくご説明し、ご納得いただいてから作業します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
