"use client";
import { motion, AnimatePresence } from "motion/react";

type ButtonInvisibleProps = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

export default function ButtonInvisible({
  text,
  isActive,
  onClick,
}: ButtonInvisibleProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      onClick={onClick}
      className="relative flex items-center justify-center w-full h-full cursor-pointer text-white font-medium -translate-y-1.5"
    >
      {text}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-3 left-0 w-full h-[2px] bg-white origin-left"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}
