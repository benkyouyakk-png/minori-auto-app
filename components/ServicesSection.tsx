import React from "react";

interface ServiceItem {
  number: string;
  title: string;
  image: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    number: "1",
    title: "鈑金（傷、へこみ）",
    image: "/service-1.jpg",
    description:
      "「擦った・ぶつけた・へこんだ・突っ込んだ・落ちた・はまった」そんなときは、豊富な経験と実績のある美野里自動車へお越しください！ぶつけた大きさや箇所、範囲によって金額が変わりますので無料でお見積りします。外注は出さず自社工場で作業（鈑金、塗装）するため、ご納得いただけるサービスと価格でご提供いたします。外車、輸入車の鈑金・塗装も多くの実績がありますので是非お問合せください。",
  },
  {
    number: "2",
    title: "車検",
    image: "/service-2.jpg",
    description:
      "自動車整備の技術、知識はもちろん公害問題、リサイクルなど関連事項にも精通し、なおかつお客様に合わせたご提案を行う、いわば自動車整備のコンサルタントです。車検はもちろんですが「何かヘンだ！」「調子が悪いかも？」など違和感を感じられましたら、症状が軽いうちにご相談ください。国家資格を持った整備士がお客様と顔を合わせ、ご相談・お見積りを担当させていただき、自社整備工場内で車検、点検・整備・修理等もさせていただきます。",
  },
  {
    number: "3",
    title: "車販売（新車、中古）",
    image: "/service-3.jpg",
    description:
      "全メーカーの新車・中古車販売を行っております。新車のカタログを店頭に多く取り揃えており、中古車は、ご希望の中古車をご予算に応じてお探しいたします。お支払方法もいろいろお選びいただけますので、お気軽にご相談ください。",
  },
  {
    number: "4",
    title: "福祉車両の修理・整備",
    image: "/service-4.jpg",
    description:
      "福祉車両をご利用の場合は、ぜひお問い合わせください。レンタカーとしてご用意していますが、修理や、車検のときは代車もご利用いただけます。また、お使いのお車の不具合等ございましたら、福祉車両の取扱士がいますので、ご相談ください。お気軽にお問い合わせください。",
  },
  {
    number: "5",
    title: "部品交換・取付（カーナビ、タイヤ、サスなど）",
    image: "/service-5.jpg",
    description:
      "当店では部品交換に関してお気軽にご相談可能です。当店での購入はもちろん部品の持ち込みなども大歓迎です。カーナビ、タイヤ、サスなどご自身で設置が難しいものに関してお気軽にご相談ください。",
  },
  {
    number: "6",
    title: "車内の除菌、消臭、消毒",
    image: "/service-6.jpg",
    description:
      "感染症予防対策に車内の除菌をお勧めしております。車内をリフレッシュ・快適にされたい方、ウイルスが気になるお子様連れのご家族、車室内のニオイが気になる方・喫煙される方、ペットを車にお乗せになる方、こんなお客様におススメです！車内除菌・消臭サービスをご利用下さい。",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* セクション見出し（画像の「— Service —」スタイルを再現） */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-300" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              SERVICE
            </span>
            <span className="h-px w-8 bg-slate-300" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            車検・整備サービス一覧
          </h3>
          <p className="text-sm text-slate-600 pt-1">
            千葉県白井市を中心に鈑金修理や車検などのカーサービスを行っています。
            <br className="hidden sm:inline" />
            ご納得の頂けるサービスをご提案いたします。
          </p>
        </div>

        {/* 6項目のグリッド（PC：3列×2段、タブレット：2列、スマホ：1列） */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              {/* 丸い写真（画像と同じ円形スタイル） */}
              <div className="mx-auto mb-5 h-36 w-36 overflow-hidden rounded-full border-4 border-emerald-50 bg-slate-100 shadow-inner">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* 番号＋タイトル */}
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3 text-center">
                <span className="text-emerald-700 mr-1">{service.number}.</span>
                {service.title}
              </h4>

              {/* 説明文 */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
