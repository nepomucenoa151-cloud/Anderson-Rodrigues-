import React, { useState, useEffect } from "react";
import { Flame, Clock } from "lucide-react";

export function TopBar() {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    setFormattedDate(`${day}/${month}/${year}`);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white py-2.5 px-4 text-center shadow-xl border-b border-red-700">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base font-black uppercase tracking-wider">
          <Flame className="w-4 h-4 text-yellow-300 shrink-0 animate-bounce" />
          <span className="text-white animate-pulse flex items-center gap-1.5 drop-shadow-md">
            🔥 OFERTA SOMENTE HOJE {formattedDate || "24/08/2026"} 🔥
          </span>
          <Flame className="w-4 h-4 text-yellow-300 shrink-0 animate-bounce hidden sm:inline-block" />
        </div>
      </header>
      {/* Spacer to prevent content jump under fixed bar */}
      <div className="h-10 sm:h-11" />
    </>
  );
}

