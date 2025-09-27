
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";
import type { SiteImage } from "@/lib/images";

type GalleryImage = SiteImage & {
  title?: string;
  href?: string;
  category?: string;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: GalleryImage[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  
  const CardContent = ({ item }: { item: GalleryImage }) => (
    <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105 bg-muted">
        {item.src ? (
            <Image
                src={item.src}
                alt={item.title || item.hint}
                fill
                className="object-cover"
                data-ai-hint={item.hint}
            />
        ) : (
            <div className="w-full h-full bg-secondary"></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        {item.category === "Hilos Tensores" && (
           <div className="absolute top-2 right-2 bg-primary/80 text-primary-foreground text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
             <Award className="w-3 h-3" />
             Especialidad
           </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-white text-sm font-semibold text-center truncate">{item.title}</p>
        </div>
    </div>
  );


  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[200px] max-w-full relative flex-shrink-0 md:w-[250px] group"
            key={`${item.id}-${idx}`}
          >
            {item.href ? (
                <Link href={item.href} className="block w-full h-full">
                    <CardContent item={item} />
                </Link>
            ) : (
                <CardContent item={item} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
