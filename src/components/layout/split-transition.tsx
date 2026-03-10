"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function SplitTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative w-full">
        {/* Split Overlays */}
        <div className="pointer-events-none fixed inset-0 z-[100] flex flex-col">
          {/* Top Half */}
          <motion.div
            initial={{ height: "50vh" }}
            animate={{ height: "0vh" }}
            exit={{ height: "50vh" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="w-full bg-zinc-50"
          />
          {/* Bottom Half */}
          <motion.div
            initial={{ height: "50vh" }}
            animate={{ height: "0vh" }}
            exit={{ height: "50vh" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="w-full bg-zinc-50 mt-auto"
          />
        </div>

        {/* Content Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
