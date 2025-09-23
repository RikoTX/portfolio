"use client";
import { useState, useRef, useEffect } from "react";
import { Col, Row } from "antd";
import ButtonInvisible from "@/components/ButtonInvisble/page";
import { gsap } from "gsap";
interface HeaderProps {
  active: string;
  setActive: (item: string) => void;
}

export default function Header({ active, setActive }: HeaderProps) {

  const boxRef = useRef<HTMLDivElement | null>(null);
  const menuItems = ["About", "Experience", "Education", "Project"];

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
      className="w-full h-14 text-white bg-[rgba(22,22,22,0.91)] rounded-2xl border border-gray-300/40 backdrop-blur-xs max-w-[calc(50%-8px)] text-center"
      justify="space-around"
    >
      {menuItems.map((item) => (
        <Col span={4} key={item}>
          <ButtonInvisible
            text={item}
            isActive={active === item}
            onClick={() => setActive(item)}
          />
        </Col>
      ))}
    </Row>
  );
}
