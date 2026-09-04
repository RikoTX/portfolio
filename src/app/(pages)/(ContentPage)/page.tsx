"use client";
import { ConfigProvider, Select } from "antd";
import React, { useState } from "react";
import HeaderComponent from "@/components/Header/page";
import SiderComponent from "@/components/Sider/page";
import ContentComponent from "@/components/ContentComponent/page";
import i18n from "@/i18n";
import { I18nextProvider } from "react-i18next";

export default function ContentPage() {
  const [active, setActive] = useState("about");
  const showProfile = active === "about";

  return (
    <I18nextProvider i18n={i18n}>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              headerBg: "transparent",
              siderBg: "transparent",
              bodyBg: "transparent",
            },
          },
        }}
      >
        <div className="relative w-full min-w-0">
          <div className="fixed left-4 top-[4.75rem] z-[60] min-[1240px]:absolute min-[1240px]:left-10 min-[1240px]:top-5">
            <Select
              defaultValue="en"
              style={{ width: 120 }}
              onChange={(value) => i18n.changeLanguage(value)}
              options={[
                { value: "en", label: "English" },
                { value: "ru", label: "Русский" },
                { value: "kz", label: "Қазақша" },
              ]}
            />
          </div>

          <header className="pointer-events-none fixed left-3/5 top-4 z-50 m-0 flex h-16 w-[min(1200px,calc(100vw-380px))] -translate-x-1/2 items-center justify-center px-12 max-[1239px]:left-1/2 max-[1239px]:top-3 max-[1239px]:h-12 max-[1239px]:w-[calc(100%-1.5rem)] max-[1239px]:px-0">
            <HeaderComponent active={active} setActive={setActive} />
          </header>

          <div className="flex w-full min-w-0 flex-col pt-36 min-[1240px]:flex-row min-[1240px]:pt-22">
            <aside
              className={`w-full min-w-0 shrink-0 text-center text-white min-[1240px]:w-[345px] ${
                showProfile ? "" : "max-[1239px]:hidden"
              }`}
            >
              <SiderComponent />
            </aside>
            <main className="w-full min-w-0 flex-1">
              <ContentComponent active={active} />
            </main>
          </div>
        </div>
      </ConfigProvider>
    </I18nextProvider>
  );
}
