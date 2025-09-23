"use client";

interface ContentProps {
  active: string;
}

export default function ContentComponent({ active }: ContentProps) {
  return (
    <div className="max-w-full w-full text-white bg-red-700/10 p-4 break-words">
      {active === "About" && (
        <div>
          about
        </div>
      )}
      {active === "Experience" && <div>Experience</div>}
      {active === "Education" && <div>Education</div>}
      {active === "Project" && <div>Project</div>}
    </div>
  );
}
