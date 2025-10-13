"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";

type LogoW3Props = {
  link: string;
  logo: JSX.Element;
};

export default function LogoW3({ link, logo }: LogoW3Props) {
  return (
    <motion.div
    whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}>
      <a href={link} target="_blank">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          height="2.3em"
          width="2.3em"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white hover:text-accent no-underline transitionolors"
        >
          {logo}
        </svg>
      </a>
    </motion.div>
  );
}
