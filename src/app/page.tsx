"use client";
import { useEffect, useState } from "react";
import SquareGrid from "@/components/BackgroundSquare/BackgroundSquare";
import StarRain from "@/components/RainOfWhites/RainOfWhites";
import ContentPage from "@/app/(pages)/(ContentPage)/page";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Select } from "antd";

function MobileWarning() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "1rem",
        background: "#111",
        color: "#fff",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
        <Select
          defaultValue={i18n.language || "en"}
          style={{ width: 120 }}
          onChange={(value) => i18n.changeLanguage(value)}
          options={[
            { value: "en", label: "English" },
            { value: "ru", label: "Русский" },
            { value: "kz", label: "Қазақша" },
          ]}
        />
      </div>

      <p style={{ fontSize: "1.5rem" }}>{t("mobile_warning")}</p>
    </div>
  );
}

export default function Home() {
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1440);

    checkScreen();
    window.addEventListener("resize", checkScreen);
    requestAnimationFrame(() => setReady(true));

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {isMobile ? (
        <MobileWarning />
      ) : (
        <div style={{ opacity: ready ? 1 : 0, transition: "opacity 0.1s" }}>
          <StarRain />
          <SquareGrid />
          <ContentPage />
        </div>
      )}
    </I18nextProvider>
  );
}
