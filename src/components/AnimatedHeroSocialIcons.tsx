"use client";

import { useRef } from "react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const BLUR_FADE_DELAY = 0.04;

export function AnimatedHeroSocialIcons() {
  return (
    <div className="flex items-center gap-3 pt-3">
      {Object.entries(DATA.contact.social)
        .filter(([key, social]) => key !== 'email')
        .map(([key, social], idx) => {
          const IconWithRef = () => {
            const iconRef = useRef<any>(null);
            
            return (
              <BlurFade key={key} delay={BLUR_FADE_DELAY + 0.05 + idx * 0.03}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center justify-center"
                      onMouseEnter={() => iconRef.current?.startAnimation?.()}
                      onMouseLeave={() => iconRef.current?.stopAnimation?.()}
                      onClick={() => {
                        iconRef.current?.startAnimation?.();
                        setTimeout(() => iconRef.current?.stopAnimation?.(), 300);
                      }}
                    >
                      <social.icon ref={iconRef} className="size-6" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social.name}</p>
                  </TooltipContent>
                </Tooltip>
              </BlurFade>
            );
          };
          
          return <IconWithRef key={key} />;
        })}
    </div>
  );
}
