"use client";

import React, { useRef } from "react";
import FileDescriptionIcon from "@/components/ui/icons/file-description-icon";

export function ResumeButton() {
  const iconRef = useRef<any>(null);

  return (
    <a
      href="https://drive.google.com/file/d/1-4luJ3zWE7XZgLHZIYHwK_nxqAQHMyoA/view?usp=sharing"
      rel="noopener noreferrer"
      target="_blank"
      className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 border bg-background text-foreground border-border hover:border-foreground/50 hover:shadow-sm"
      onMouseEnter={() => iconRef.current?.startAnimation?.()}
      onMouseLeave={() => iconRef.current?.stopAnimation?.()}
    >
      <FileDescriptionIcon ref={iconRef} size={18} />
      Resume
    </a>
  );
}
