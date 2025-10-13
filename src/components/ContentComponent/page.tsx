"use client";
import { Kanit } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import About from "./About";
import Growth from "./Growth";
import Education from "./Education";
import Project from "./Project";
import { useEffect } from "react";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

interface ContentProps {
  active: string;
  setActive: (item: string) => void;
}

export default function ContentComponent({ active, setActive }: ContentProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  return (
    <div
      className={`${kanit.className} max-w-full w-full text-white p-4 break-words`}
    >
      <AnimatePresence mode="wait">
        {active === "about" && (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>
        )}

        {active === "growth" && (
          <motion.div
            key="growth"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Growth setActive={setActive} />
          </motion.div>
        )}

        {active === "education" && (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Education />
          </motion.div>
        )}

        {active === "projects" && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Project />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
