"use client";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./Project";

interface ContentProps {
  active: string;
}

export default function ContentComponent({ active }: ContentProps) {
  return (
    <div className="max-w-full w-full text-white bg-red-700/10 p-4 break-words">
      {active === "About" && <About />}
      {active === "Experience" && <Experience />}
      {active === "Education" && <Education />}
      {active === "Project" && <Project />}
    </div>
  );
}
