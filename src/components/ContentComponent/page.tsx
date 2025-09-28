"use client";
import { Kanit } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./Project";

const kanit = Kanit({
  subsets: ["latin", "cyrillic"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  style: ["normal", "italic"],
});

interface ContentProps {
  active: string;
}

export default function ContentComponent({ active }: ContentProps) {
  return (
    <div className={`${kanit.className} max-w-full w-full text-white bg-red-700/10 p-4 break-words`}>
      <AnimatePresence mode="wait">
        {active === "About" && (
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

        {active === "Experience" && (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Experience />
          </motion.div>
        )}

        {active === "Education" && (
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
        
        {active === "Project" && (
          <motion.div
            key="project"
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
