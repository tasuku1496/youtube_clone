"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50 flex items-center p-4">
      <Link href="/" className="text-xl font-bold text-red-600">
        YouTube
      </Link>
      <div className="flex flex-1 justify-center px-4">
        <input
          type="text"
          placeholder="検索"
          className="border border-gray-300 rounded-l-full px-4 py-2 w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-gray-200 border border-gray-300 rounded-r-full px-4">
          🔍
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-1 rounded">
          ログイン
        </button>
      </div>
    </header>
  );
}
