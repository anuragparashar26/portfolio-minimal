"use client";

import { useEffect, useState } from "react";

export function LocalTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Location Box - Top Left */}
      <div className="hidden md:flex fixed top-4 left-4 z-50">
        <div className="px-4 py-2 rounded-md border-2 border-border bg-background flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span className="text-sm font-bold text-foreground whitespace-nowrap">
            Bengaluru, India
          </span>
        </div>
      </div>

      {/* Clock Box - Top Right */}
      <div className="hidden md:flex fixed top-4 right-4 z-50">
        <div className="group relative">
          <div className="px-4 py-2 rounded-md border-2 border-border bg-background flex items-center gap-2 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span className="text-sm font-bold text-foreground font-mono tabular-nums">
              {time}
            </span>
          </div>

          {/* Tooltip */}
          <div className="pointer-events-none absolute right-0 mt-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              <div className="relative rounded-lg bg-foreground text-background text-xs px-3 py-1.5 whitespace-nowrap">
                  time is slipping away, make it count
                  <div className="absolute -top-1 right-5 h-2 w-2 rotate-45 bg-foreground" />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
