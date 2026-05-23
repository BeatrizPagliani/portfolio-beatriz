"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (!loading) return null;

  return (

    <div className="fixed inset-0 bg-[#0d0d0d] z-[9999] flex items-center justify-center">

      <div className="w-full max-w-xl px-8">

        <p className="mono-font text-[#b7efc5] mb-6 text-sm">
          INITIALIZING SYSTEM...
        </p>

        <h1 className="pixel-font text-[#f5f5f5] text-2xl md:text-4xl leading-relaxed mb-10">

          LOADING
          <br />
          PORTFOLIO.EXE

        </h1>

        {/* barra */}
        <div className="w-full h-6 border border-[#3a3a3a] bg-[#1a1a1a] overflow-hidden">

          <div className="h-full bg-[#b7efc5] loading-bar"></div>

        </div>

        <p className="mono-font text-[#888] mt-6 text-sm cursor">
          ACCESSING DATABASE
        </p>

      </div>

    </div>

  );
}