"use client";

import React, { useRef } from "react";
import PhoneVolumeIcon from "@/components/ui/icons/phone-volume";

export function ContactScrollButton({ className }: { className?: string }) {
  const iconRef = useRef<any>(null);

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      onMouseEnter={() => iconRef.current?.startAnimation?.()}
      onMouseLeave={() => iconRef.current?.stopAnimation?.()}
    >
      <PhoneVolumeIcon ref={iconRef} size={16} />
      Contact
    </button>
  );
}
