import { cn } from "@/lib/utils";
import * as React from "react";

export function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2859 3333"
      fill="currentColor"
      className={cn("w-6 h-6", props.className)}
      {...props}
    >
        <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1735 747-213-545 171-1224 838-1440 149-33 307-39 455-29v531c-118 21-250 16-370-36-383-165-467-654-70-943 252-192 597-209 838-51v1002c-1.333 1.167-2.667 2.333-4 3.5-127 113-227 294-227 500 0 339 272 611 611 611 339 0 611-272 611-611v-2189c-2-12-4-23-4-35z"></path>
    </svg>
  );
}
