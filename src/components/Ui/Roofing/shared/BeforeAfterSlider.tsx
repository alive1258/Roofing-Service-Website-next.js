"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative aspect-4/3 w-full select-none overflow-hidden rounded-2xl shadow-2xl sm:aspect-16/9">
      <Image
        src={afterSrc}
        alt={afterLabel}
        fill
        sizes="(max-width: 1024px) 100vw, 900px"
        className="object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeLabel}
          fill
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-cover"
        />
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-brand-900/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-900">
        {afterLabel}
      </span>

      <div
        className="absolute inset-y-0 w-1 bg-white shadow-[0_0_0_2px_rgba(0,0,0,0.15)]"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-900 shadow-lg">
          <MoveHorizontal size={18} />
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
};

export default BeforeAfterSlider;
