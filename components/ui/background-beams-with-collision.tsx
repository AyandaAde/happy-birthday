"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  // Generate hearts across the whole width
  const [beams, setBeams] = useState<
    {
      initialX?: number;
      translateX?: number;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
      className?: string;
    }[]
  >([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const heartCount = 12; // number of hearts across screen
    const spacing = screenWidth / heartCount;

    const generated = Array.from({ length: heartCount }, (_, i) => {
      const x = i * spacing + Math.random() * (spacing / 2); // spread & offset
      return {
        initialX: x,
        translateX: x,
        duration: 4 + Math.random() * 6, // random speed
        delay: Math.random() * 3,
        repeatDelay: Math.random() * 5,
      };
    });

    setBeams(generated);
  }, []);

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-screen bg-gradient-to-tl from-[#011b2c] via-[#012943] to-[#011b2c] relative flex items-center w-screen justify-center overflow-hidden",
        className
      )}
    >
      {beams.map((beam, idx) => (
        <CollisionMechanism
          key={idx}
          beamOptions={beam}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

function CollisionMechanism({
  beamOptions,
}: {
  beamOptions: {
    initialX?: number;
    translateX?: number;
    duration?: number;
    delay?: number;
    repeatDelay?: number;
    className?: string;
  };
}) {
  return (
    <motion.div
      className="absolute"
      style={{
        left: beamOptions.initialX,
        bottom: 0, // 🌟 Start from bottom
      }}
      initial={{ y: 0, opacity: 0, scale: 0.8 }}
      animate={{
        y: -window.innerHeight - 150,
        opacity: 0.7,
        scale: 0.6, // subtle grow effect
      }}
      transition={{
        duration: beamOptions.duration ?? 4, // ⚡ faster than before
        delay: beamOptions.delay ?? 0,
        repeat: Infinity,
        repeatDelay: beamOptions.repeatDelay ?? 1.5, // quicker emission
        ease: "easeOut",
      }}
    >
      {/* ❤️ Glossy bright red heart (like iPhone) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="60"
        height="60"
      >
        <defs>
          {/* Glossy gradient with strong highlights */}
          <radialGradient id="heartHighlight" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ff6666" stopOpacity="1" />
            <stop offset="40%" stopColor="#ff1a1a" stopOpacity="1" />
            <stop offset="70%" stopColor="#cc0000" stopOpacity="1" />
            <stop offset="100%" stopColor="#800000" stopOpacity="1" />
          </radialGradient>
        </defs>
        <path
          fill="url(#heartHighlight)"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
             2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
             4.5 2.09C13.09 3.81 14.76 3 16.5 3 
             19.58 3 22 5.42 22 8.5c0 
             3.78-3.4 6.86-8.55 11.54L12 
             21.35z"
        />
      </svg>
    </motion.div>
  );
}

CollisionMechanism.displayName = "CollisionMechanism";
