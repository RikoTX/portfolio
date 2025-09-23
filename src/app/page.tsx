"use client";
import { useEffect, useState } from "react";
import SquareGrid from "@/components/BackgroundSquare/BackgroundSquare";
import StarRain from "@/components/RainOfWhites/RainOfWhites";
import ContentPage from "@/app/(pages)/(ContentPage)/page";

export default function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setReady(true));
  }, []);

  return (
    <div style={{ opacity: ready ? 1 : 0, transition: "opacity 0.1s" }}>
      <StarRain />
      <SquareGrid />
      <ContentPage />
    </div>
  );
}
