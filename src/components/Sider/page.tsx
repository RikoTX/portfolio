"use client";
import InformationCard from "@/components/InformationCard/page";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import FollowMe from "../FollowMe/page";
import { useTranslation } from "react-i18next";

export default function Sider() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div
      ref={boxRef}
      className="ml-0 flex h-auto w-full min-w-0 flex-col gap-8 break-words px-4 pb-8 min-[1240px]:ml-6 min-[1240px]:h-full min-[1240px]:gap-15 min-[1240px]:px-0 min-[1240px]:pb-0"
    >
      <InformationCard t={t}/>
      <FollowMe/>
    </div>
  );
}
