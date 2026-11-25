import React from "react";
import { MapPin, Phone, Clock, ShieldCheck, Car } from "lucide-react";

export default function AccessSection() {
  return (
    <section
      id="access"
      className="scroll-mt-24 py-16 md:py-24 bg-slate-50 border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクション見出し */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-bold tracking-wider text-emerald-700">
            ACCESS &amp; INFO
          </p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-gray-900">
            店舗案内・アクセス
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            お車の車検・点検・修理のご相談など、お気軽にご来店・お問い合わせください。
          </p>
        </div>

        {/* 2カラムレイアウト：左に店舗情報、右にGoogleマップ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* 左側：店舗情報カード */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800 mb-2">
                <ShieldCheck className="h-4 w-4" />
                関東運輸局長指定工場（指定番号 3-694 / 認証番号 3-2877）
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                有限会社 美野里自動車整備工場
              </h3>
            </div>

            <dl className="divide-y divide-slate-100 text-sm sm:text-base">
              <div className="py-3.5 flex flex-col sm:flex-row sm:gap-4">
                <dt className="font-bold text-gray-900 sm:w-32 shrink-0 flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-emerald-700" />
                  所在地
                </dt>
                <dd className="text-gray-700 mt-1 sm:mt-0">
                  〒270-1402<br />
                  千葉県白井市平塚2741-2
                </dd>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:gap-4">
                <dt className="font-bold text-gray-900 sm:w-32 shrink-0 flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-emerald-700" />
                  TEL / FAX
                </dt>
                <dd className="mt-1 sm:mt-0 space-y-1">
                  <div>
                    <a
                      href="tel:047-497-0485"
                      className="text-lg font-extrabold text-emerald-700 hover:underline"
                    >
                      047-497-0485
                    </a>
                  </div>
                  <p className="text-xs text-gray-500">
                    FAX：047-497-0459
                  </p>
                </dd>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:gap-4">
                <dt className="font-bold text-gray-900 sm:w-32 shrink-0 flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-emerald-700" />
                  営業時間
                </dt>
                <dd className="text-gray-700 mt-1 sm:mt-0">
                  8:30〜17:30<br />
                  <span className="text-xs text-gray-500">
                    ※定休日：日曜・祝日・第1土曜
                  </span>
                </dd>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:gap-4">
                <dt className="font-bold text-gray-900 sm:w-32 shrink-0 flex items-center gap-1.5">
                  <Car className="h-4 w-4 text-emerald-700" />
                  事業内容
                </dt>
                <dd className="text-gray-700 mt-1 sm:mt-0 leading-relaxed">
                  車検整備・法定点検・一般修理・鈑金塗装・新車中古車販売・自動車保険取扱・大型特殊車両整備
                </dd>
              </div>
            </dl>
          </div>

          {/* 右側：Googleマップ埋め込み */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-2 h-[350px] sm:h-[450px] overflow-hidden">
            <iframe
              src="https://google.com"
              className="w-full h-full rounded-xl border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="有限会社 美野里自動車整備工場 地図"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
