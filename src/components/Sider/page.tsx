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
      className="break-all w-full h-full ml-6 flex flex-col gap-15"
    >
      <InformationCard t={t}/>
      <FollowMe/>
    </div>
  );
}
