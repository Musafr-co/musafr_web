"use client";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { JSX } from "react";

export default function UnderConstructionPage(): JSX.Element {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(75); // Animate to 75%
    }, 200); // delay for smooth entry

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-[#0173A5] flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-64 md:w-96 md:h-96 p-5 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <Image
              src="/MusafrSVG.svg"
              alt="Musafr"
              width={96} // or any value based on your layout
              height={96}
              className="w-96 h-96"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              {"We're Building"}
              <span className="block text-white">Something Amazing</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              {"Our website is currently under construction. We're working hard to bring you an incredible experience. Stay tuned for something special!"}
            </p>
          </div>

          {/* Construction Icon Animation */}
          <div className="flex justify-center items-center space-x-2 py-6">
            <Clock className="w-6 h-6 text-white animate-spin" />
            <span className="text-white font-medium">Under Construction</span>
            <Clock className="w-6 h-6 text-white animate-spin" />
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto space-y-2">
            <div className="flex justify-between text-sm text-white">
              <span>Progress</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-slate-300 to-slate-100 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-slate-200">
          <p className="text-slate-300 text-sm">
            © 2025 Musafr.co. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>
    </div>
  );
}
