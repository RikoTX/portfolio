"use client";
import { ExportOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import Image from "next/image";

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
  const { t } = useTranslation();
  return (
    <div
      className="flex w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-700 bg-surface shadow-md"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="relative group select-none h-44">
        <Image
          alt={name}
          src={img}
          fill
          sizes="(max-width: 1239px) 100vw, 50vw"
          className="object-cover filter blur-[2px] brightness-75 transition duration-300 group-hover:blur-sm group-hover:brightness-100"
        />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="bg-black/60 px-4 py-2 rounded-full text-sm font-semibold text-blue-400 backdrop-blur-md">
            <ExportOutlined /> {t("contentPageProject.visit")}
          </span>
        </a>
      </div>

      <div className="p-6 flex-1 flex flex-col gap-4 font-mono">
        <div className="flex items-center justify-between max-[1239px]:flex-wrap max-[1239px]:gap-2">
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
              ? t("contentPageProject.processCompleted")
              : process === false
              ? t("contentPageProject.processNotCompleted")
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
