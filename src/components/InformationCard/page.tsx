"use client";
import Image from "next/image";
import { TFunction } from "i18next";
interface InformationCardProps {
  t: TFunction;
}
export default function informationCard({ t }: InformationCardProps) {
  return (
    <div className=" w-full h-110 rounded-2xl border border-gray-500/50  flex justify-center flex-col flex-wra p-7 items-center gap-10">
      <Image
        src="/me.png"
        alt="Logo"
        width={1000}
        height={1000}
        unoptimized
        className="w-40 h-40 rounded-full border-2 border-white object-cover"
        priority
      />
      <div className="flex gap-3 flex-col">
        <div>
          <p className="text-3xl md:text-[43px] font-bold font-mono text-accent break-words ">
            {t("informationCard.name", { defaultValue: "Kokish Amir" })}
          </p>
        </div>
        <p className="text-gray-400 text-lg">
          {t("informationCard.role", { defaultValue: "Frontend Developer" })}
        </p>
      </div>
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1 rounded-full text-sm">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 384 512"
          className="text-accent"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
        </svg>

        <p className="font-mono">
          {" "}
          {t("informationCard.location", {
            defaultValue: "Astana, Kazakhstan",
          })}
        </p>
      </div>
    </div>
  );
}
