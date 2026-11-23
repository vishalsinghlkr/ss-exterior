"use client";

import React, { useRef, useState, useCallback } from "react";

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt angle in degrees, default 10
  scale?: number; // scale on hover, default 1.02
  perspective?: number; // perspective in px, default 1000
  glare?: boolean; // enable holographic light glare, default true
}

export default function Tilt3DCard({
  children,
  className = "",
  maxTilt = 8,
  scale = 1.02,
  perspective = 1000,
  glare = true,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [glarePos, setGlarePos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt (-1 to 1)
      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      // Invert Y for standard natural 3D tilt
      const rX = -(percentY * maxTilt);
      const rY = percentX * maxTilt;

      setRotateX(rX);
      setRotateY(rY);
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
      });
    },
    [maxTilt]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-transform duration-200 ease-out ${className}`}
    >
      <div
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transformStyle: "preserve-3d",
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        }}
        className="w-full h-full relative"
      >
        {children}

        {/* Dynamic Holographic Sunlight / Glare Layer */}
        {glare && isHovered && (
          <div
            className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] overflow-hidden"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(253, 230, 138, 0.22) 0%, rgba(212, 175, 55, 0.08) 35%, transparent 70%)`,
              mixBlendMode: "screen",
              transition: "opacity 0.2s ease",
            }}
          />
        )}
      </div>
    </div>
  );
}
