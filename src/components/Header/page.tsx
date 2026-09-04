"use client";
import { useRef, useEffect } from "react";
import { Col, Row } from "antd";
import ButtonInvisible from "@/components/ButtonInvisble/page";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  active: string;
  setActive: (item: string) => void;
}

export default function Header({ active, setActive }: HeaderProps) {
  const { t } = useTranslation();
  const boxRef = useRef<HTMLDivElement | null>(null);
  const menuItems = ["about", "education", "projects"];

  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
      );
    }
  }, []);
  return (
    <Row
      ref={boxRef}
      className="pointer-events-auto h-14 w-full max-w-[calc(50%-8px)] select-none rounded-2xl border border-gray-300/40 bg-white/10 text-center text-white shadow-xl backdrop-blur-md max-[1239px]:h-12 max-[1239px]:max-w-full"
      justify="space-around"
    >
      {menuItems.map((item) => (
        <Col span={4} xs={8} xl={4} key={item}>
          <ButtonInvisible
            isActive={active === item}
            text={t(`header.${item}`)}
            onClick={() => setActive(item)}
          />
        </Col>
      ))}
    </Row>
  );
}
