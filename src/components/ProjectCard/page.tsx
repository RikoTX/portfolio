"use client";
import { ExportOutlined } from "@ant-design/icons";

type typeCard = {
  name: string;
  link: string;
  img: string;
  description: string;
  process: boolean | string;
  stack?: string[];
};

export default function ProjectCard({
  name,
  link,
  img,
  description,
  process,
  stack,
}: typeCard) {
  return (
    <div
      className="bg-surface border border-gray-700 rounded-2xl shadow-md overflow-hidden flex flex-col"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="relative group">
        <img
          alt="project"
          className="w-full h-44 object-cover filter blur-[2px] brightness-75 transition duration-300 group-hover:blur-sm group-hover:brightness-100"
          src={img}
        />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="bg-black/60 px-4 py-2 rounded-full text-sm font-semibold text-blue-400 backdrop-blur-md">
            <ExportOutlined /> Visit
          </span>
        </a>
      </div>

      <div className="p-6 flex-1 flex flex-col gap-4 font-mono">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-accent">{name}</h3>
          <span
            className={`text-xs px-3 py-0.5 rounded-full 
    ${
      process === true
        ? "bg-green-500"
        : process === false
        ? "bg-red-500"
        : "bg-yellow-500"
    }`}
          >
            {process === true
              ? "Completed"
              : process === false
              ? "Not completed"
              : process}
          </span>
        </div>

        <p className="text-sm text-gray-300">{description}</p>

        <div className="flex flex-wrap gap-2">
          {stack?.map((tech, index) => (
            <span
              key={index}
              className="bg-white/10 border border-white/20 rounded-full px-2 py-0.5 text-xs text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
