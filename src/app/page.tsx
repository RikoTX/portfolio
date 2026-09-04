"use client";
import { useEffect, useState } from "react";
import SquareGrid from "@/components/BackgroundSquare/BackgroundSquare";
import StarRain from "@/components/RainOfWhites/RainOfWhites";
import ContentPage from "@/app/(pages)/(ContentPage)/page";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";

export default function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setReady(true));
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <div className="overflow-x-clip" style={{ opacity: ready ? 1 : 0, transition: "opacity 0.1s" }}>
        <StarRain />
        <SquareGrid />
        <ContentPage />
      </div>
    </I18nextProvider>
  );
}
