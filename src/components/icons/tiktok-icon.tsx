import { cn } from "@/lib/utils";
import * as React from "react";

export function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("w-6 h-6", props.className)}
      {...props}
    >
        <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.59H9.32a2.592 2.592 0 0 1-2.59-2.59V8.38a2.592 2.592 0 0 1 2.59-2.59h.54s-.51-.5 0 0a2.592 2.592 0 0 1 2.59-2.59h3.09a4.278 4.278 0 0 1 1.06 2.82z"></path>
    </svg>
  );
}
