"use client";

import React, { useRef } from "react";
import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  IconComponent: any;
  skill: string;
}

export function SkillBadge({ IconComponent, skill }: SkillBadgeProps) {
  const iconRef = useRef<any>(null);

  return (
    <Badge 
      className="inline-flex items-center gap-1.5 cursor-default"
      onMouseEnter={() => iconRef.current?.startAnimation?.()}
      onMouseLeave={() => iconRef.current?.stopAnimation?.()}
    >
      <IconComponent ref={iconRef} size={14} />
      {skill}
    </Badge>
  );
}
