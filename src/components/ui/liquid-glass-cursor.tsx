"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function LiquidGlassCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the "liquid" trail effect
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const liquidX = useSpring(mouseX, springConfig);
  const liquidY = useSpring(mouseY, springConfig);

  // Faster spring for the center dot
  const dotX = useSpring(mouseX, { damping: 30, stiffness: 400, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 30, stiffness: 400, mass: 0.1 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [mouseX, mouseY, isVisible]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isInteractive = 
      target.closest("a") || 
      target.closest("button") || 
      target.closest('[role="button"]') ||
      target.tagName.toLowerCase() === "input" ||
      target.tagName.toLowerCase() === "textarea";
    
    setIsHovering(!!isInteractive);
  }, []);

  useEffect(() => {
    // Check for mobile/touch device
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [handleMouseMove, handleMouseOver]);

  if (isMobile || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Liquid Outer Ring */}
      <motion.div
        style={{
          x: liquidX,
          y: liquidY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 80 : 32,
          height: isHovering ? 80 : 32,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.1)",
          backdropFilter: isHovering ? "blur(8px)" : "blur(4px)",
          border: isHovering ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid rgba(255, 255, 255, 0.2)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
        className="rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      />

      {/* Center Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.8)",
          mixBlendMode: isHovering ? "difference" : "normal",
        }}
        className="w-1.5 h-1.5 rounded-full"
      />
    </div>
  );
}
