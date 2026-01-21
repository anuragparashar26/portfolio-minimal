"use client";

import { useEffect, useState, useRef } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { Eye } from "lucide-react";

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const hasTracked = useRef(false);

  useEffect(() => {
    const trackAndFetchViews = async () => {
      if (hasTracked.current) {
        return;
      }
      hasTracked.current = true;

      try {
        const response = await fetch("/api/views", {
          method: "POST",
        });
        
        if (response.ok) {
          const data = await response.json();
          setViews(data.views || 0);
        } else {
          setViews(0);
        }
      } catch (error) {
        console.error("Failed to fetch views:", error);
        setViews(0);
      } finally {
        setLoading(false);
      }
    };

    trackAndFetchViews();
  }, []);

  if (loading) {
    return (
      <BlurFade delay={0.2}>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground py-4">
          <Eye className="size-4 animate-pulse" />
          <span>Loading views...</span>
        </div>
      </BlurFade>
    );
  }

  if (views === null) {
    return null;
  }

  return (
    <BlurFade delay={0.2}>
      <div className="py-2 mb-10 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-xl border bg-background px-4 py-2">
          <Eye className="size-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Total visitors:{" "}
            <span className="font-semibold text-foreground tabular-nums">
              {views.toLocaleString()}
            </span>
          </span>
        </div>
      </div>
    </BlurFade>
  );
}
