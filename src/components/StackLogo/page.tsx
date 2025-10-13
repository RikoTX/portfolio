"use client";
import { motion } from "framer-motion";
import React, { JSX } from "react";


type Stack = {
  nameStack: string;
  logo: JSX.Element;
};

export default function StackLogo({ logo, nameStack }: Stack) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="flex flex-col items-center w-20 cursor-pointer"
    >
      <svg
        className="w-8 h-8 text-white/70"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        {logo}
      </svg>
      <p className="text-base mt-2 font-light text-gray-300 text-center select-none">
        {nameStack}
      </p>
    </motion.div>
  );
}
