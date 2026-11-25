"use client";

import React, { useEffect, useState } from "react";

export default function GreetingSection() {
  const [isVisible, setIsVisible] = useState(false);

  // public フォルダ内の全14枚の画像
  const galleryImages = [
    "/back.jpg",
    "/bannkinn.jpg",
    "/fukusi.jpg",
    "/hannbai.jpg",
    "/mtaiay.jpg",
    "/pertu.jpg",
    "/phb.jpg",
    "/phminori-1.jpg",
    "/phminori-2.jpg",
    "/phminori-3.jpg",
    "/phminori.jpg",
    "/president.jpg",
    "/souzi.jpg",
    "/syakenn.jpg",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="greeting" className="pt-6 sm:pt-8 bg-white overflow-hidden scroll-mt-24">
      {/* ▼ ここから：細く帯状に左へスライドする画像エリア（全14枚ループ） ▼ */}
      <div className="w-full bg-slate-100 py-2.5 border-b border-slate-200 overflow-hidden">
        <div className="animate-scroll-left flex gap-2.5">
          {/* 継ぎ目なく無限ループさせるために同じ画像リストを2回繰り返して表示 */}
          {[...galleryImages, ...galleryImages].map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="h-20 sm:h-28 w-32 sm:w-44 shrink-0 overflow-hidden rounded-md shadow-xs bg-slate-200"
            >
              <img
                src={src}
                alt={`美野里自動車 ギャラリー ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {/* ▲ ここまで：帯状スライドエリア ▲ */}

      {/* ▼ ここから：代表挨拶セクション（少しズレて表示） ▼ */}
      <div className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* 左側：挨拶文 */}
            <div
              className={`w-full md:w-3/5 space-y-4 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <p className="text-sm font-bold tracking-wider text-emerald-700">
                GREETING
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                地域の皆様の安全なカーライフを支えて
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  美野里自動車のホームページをご覧いただき、誠にありがとうございます。
                  私たちは創業以来、地域の皆様が毎日安心してお車にお乗りいただけるよう、一台一台丁寧な整備・点検を心がけてまいりました。
                </p>
                <p>
                  お車のちょっとした違和感や車検のご相談、急なトラブルなど、どんな些細なことでもお気軽にお声がけください。皆様の頼れる「町の整備工場」として、誠心誠意対応いたします。
                </p>
              </div>
              <div className="pt-2 text-right">
                <p className="text-sm text-gray-500">美野里自動車</p>
                <p className="text-lg font-bold text-gray-900">代表取締役 〇〇 〇〇</p>
              </div>
            </div>

            {/* 右側：社長の写真（public直下の president.jpg を参照） */}
            <div
              className={`w-full md:w-2/5 transition-all duration-1000 delay-500 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src="/president.jpg"
                  alt="美野里自動車 代表"
                  className="w-full h-auto object-cover object-right aspect-[4/3] md:aspect-[3/4]"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
