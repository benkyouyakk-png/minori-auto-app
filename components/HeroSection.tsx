"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, CalendarCheck, ShieldCheck, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const heroImages = ["/phb.jpg", "/phminori.jpg"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {/* 背景ズームイン・スライドショー */}
      {heroImages.map((src, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt="有限会社 美野里自動車整備工場"
              className={`h-full w-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                isActive ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        );
      })}

      {/* 文字を読みやすくするための暗めグラデーションフィルター */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-emerald-950/60" />

      {/* 前面のテキスト・ボタンコンテンツ */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/70 px-3.5 py-1 text-xs font-semibold text-emerald-200 backdrop-blur-xs">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            創業70年以上の実績・国の指定整備工場（指定番号 3-694）
          </div>

          <h2 className="animate-slide-zoom-left text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-sm">
            愛車の車検・修理なら、
            <br />
            <span className="text-emerald-400">地域密着の指定工場</span>へ。
          </h2>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed drop-shadow-xs">
            小さなキズ・ヘコミ修理から、一日車検、法定点検、大型車の整備まで。
            お客様の立場に立った丁寧な説明と確かな技術で、安全快適なカーライフをお守りします。
          </p>

                    {/* アクションボタン */}
                    <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-3.5 pt-2">
            <a
              href="https://line.me/R/ti/p/%40564olgwa"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-1.5 sm:gap-3 rounded-xl bg-gradient-to-r from-[#06C755] to-emerald-600 px-2.5 py-2.5 sm:px-7 sm:py-3.5 text-white shadow-lg shadow-emerald-950/50 ring-1 ring-white/25 hover:from-[#05b34c] hover:to-emerald-500 hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* LINE吹き出しアイコン（SVG） */}
              <div className="flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#06C755] shadow-xs">
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </div>

              {/* 2段構成のテキスト（スマホでは文字を小さくして1行に収める） */}
              <div className="text-left leading-tight min-w-0">
                <span className="block text-[9px] sm:text-[11px] font-medium text-emerald-100 truncate">
                  24時間受付・写真見積OK
                </span>
                <span className="block text-xs sm:text-base font-extrabold tracking-tight sm:tracking-wide">
                  公式LINEで予約・相談
                </span>
              </div>

              <ChevronRight className="hidden sm:block h-5 w-5 text-white/90 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="tel:047-497-0485"
              className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-white/30 bg-white/10 px-2.5 py-2.5 sm:px-7 sm:py-4 text-xs sm:text-base font-bold text-white backdrop-blur-xs hover:bg-white/20 transition"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-400" />
              <div className="text-left sm:text-center leading-tight">
                <span className="block sm:hidden text-[9px] font-medium text-slate-300">
                  お電話でのご相談
                </span>
                <span>047-497-0485</span>
                <span className="hidden sm:inline"> に電話する</span>
              </div>
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}
