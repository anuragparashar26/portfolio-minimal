"use client";

import ArrowUpRightIcon from "@/components/ui/arrow-up-right-icon";
import { useRef } from "react";

interface CertificationLinkProps {
  href: string;
}

export function CertificationLink({ href }: CertificationLinkProps) {
  const arrowRef = useRef<any>(null);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded bg-primary text-primary-foreground px-3 py-1 font-semibold shadow hover:bg-primary/90 transition-colors text-xs"
      onMouseEnter={() => arrowRef.current?.startAnimation?.()}
      onMouseLeave={() => arrowRef.current?.stopAnimation?.()}
    >
      View Credential
      <ArrowUpRightIcon ref={arrowRef} size={12} />
    </a>
  );
}
