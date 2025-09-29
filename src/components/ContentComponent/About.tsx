"use client";
import { motion } from "framer-motion";
import StackLogo from "../StackLogo/page";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { skills } from "@/constants/skills";
import { LogoStack } from "@/constants/logoStack";

export default function About() {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(boxRef.current!.children, {
        opacity: 0,
        y: 20,
        duration: 0.1,
        stagger: 0.1,
        delay: 1.1,
        ease: "power3.out",
      });
    }, boxRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-accent mb-6">
        About Me
      </h1>
      <div className="flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 text-justify max-w-3xl">
            Frontend developer with over 1 year of experience in creating modern
            web applications and interfaces. I am able to run a full cycle of
            client development, from adaptive layout to backend integration and
            performance optimization. I am confident in JavaScript/TypeScript,
            React, Next.js and modern development tools.
          </div>
          <div className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 text-justify max-w-3xl">
            I am distinguished by my attention to detail, I understand the
            principles of UX/UI well, and I am able to turn ideas into
            user-friendly, scalable, and aesthetic interfaces. I work
            effectively both independently and in distributed teams, adhering to
            the best practices in code, testing and version control. I strive
            for continuous development and creation of solutions that bring real
            value to users.
          </div>
        </motion.span>
        <motion.span
          className="w-full max-w-3xl text-left text-2xl font-semibold my-6 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h1 className="mb-4 text-left">Professional Skills</h1>
          <ul className="space-y-3 list-none">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center text-gray-300 text-base sm:text-lg"
              >
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 flex-shrink-0"></span>
                <span className="text-base text-gray-400">{skill}</span>
              </li>
            ))}
          </ul>
        </motion.span>
        <motion.span
          className="w-full max-w-3xl text-left text-2xl font-semibold my-6 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h1 className="mb-4 text-left">Stack</h1>

          <div ref={boxRef} className="flex flex-wrap gap-8">
            {LogoStack.map((stack, index) => (
              <StackLogo
                key={index}
                nameStack={stack.nameLogo}
                logo={<path d={stack.path} />}
              />
            ))}
          </div>
        </motion.span>
      </div>
    </div>
  );
}
