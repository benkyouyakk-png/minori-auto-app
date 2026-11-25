"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  // メニューの開閉状態を管理
  const [isOpen, setIsOpen] = useState(false);

  // メニュー項目（必要に応じてリンク先や名前を変更してください）
    const navItems = [
    { name: "トップ", href: "/" },
    { name: "代表挨拶", href: "/#greeting" },
    { name: "選ばれる3つの理由", href: "/#strengths" },
    { name: "サービス・料金", href: "/#services" },
    { name: "店舗案内・アクセス", href: "/#access" },
  ];


  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          
          {/* 左側：会社名・ロゴ */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-emerald-800 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded">
                関東運輸局長指定工場
              </span>
              <span className="text-[11px] sm:text-xs text-gray-600">
                千葉県白井市の車検・点検・鈑金塗装
              </span>
            </div>
            <Link href="/" className="text-lg sm:text-2xl font-bold text-gray-900 tracking-tight">
              有限会社 美野里自動車整備工場
            </Link>
          </div>

          {/* PC用ナビゲーション（スマホでは非表示） */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-bold text-gray-700 hover:text-emerald-700 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* スマホ用ハンバーガーボタン（PCでは非表示） */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="メニューを開く"
          >
            {isOpen ? (
              /* 閉じる（×）アイコン */
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* ハンバーガー（三本線）アイコン */
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* スマホ用ドロップダウンメニュー（isOpenがtrueの時だけ表示） */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)} // タップしたらメニューを閉じる
              className="block py-3 px-2 text-base font-bold text-gray-800 border-b border-gray-100 hover:bg-emerald-50 hover:text-emerald-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
