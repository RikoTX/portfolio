"use client";

interface ContentProps {
  active: string;
}

export default function ContentComponent({ active }: ContentProps) {
  return (
    <div className="max-w-full w-full text-white h-full flex items-center justify-center bg-red-700/10">
      {active === "About" && <div>About</div>}
      {active === "Experience" && <div>Experince</div>}
      {active === "Education" && <div>Education</div>}
      {active === "Project" && <div>Project</div>}
    </div>
  );
}
