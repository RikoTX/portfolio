"use client";
import { motion, AnimatePresence } from "framer-motion";

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
      className="relative flex h-full w-full -translate-y-1.5 cursor-pointer items-center justify-center font-medium text-white max-[1239px]:translate-y-0"
    >
      <span className="relative inline-block">
        {text}
        <AnimatePresence>
          {isActive && (
            <motion.div
              key="underline-mobile"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute right-0 -bottom-0.5 left-0 h-px origin-left bg-white min-[1240px]:hidden"
            />
          )}
        </AnimatePresence>
      </span>
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-3 left-0 hidden h-[2px] w-full origin-left bg-white min-[1240px]:block"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}
