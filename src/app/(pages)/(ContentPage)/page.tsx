"use client";
import { Layout, Flex, ConfigProvider } from "antd";
import React, { useState } from "react";
import HeaderComponent from "@/components/Header/page";
import SiderComponent from "@/components/Sider/page";
import ContentComponent from "@/components/ContentComponent/page";
import { Select } from "antd";
import i18n from "@/i18n";
import { I18nextProvider } from "react-i18next";

const { Header, Sider, Content } = Layout;

export default function ContentPage() {
  const [active, setActive] = useState("About");
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
        <Flex gap="middle" wrap>
          <div className="absolute left-10 top-5">
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
          <Header className="fixed top-4 left-3/5 -translate-x-1/2 w-[1200px] h-16 px-12 flex justify-center items-center m-0 z-50 bg-[rgba(22,22,22,0.91)]  rounded-2xl">
            <HeaderComponent active={active} setActive={setActive} />
          </Header>
          <Layout className="flex flex-row pt-22">
            <Sider className="text-center text-white" width={345}>
              <SiderComponent />
            </Sider>
            <Content>
              <ContentComponent setActive={setActive} active={active} />
            </Content>
          </Layout>
        </Flex>
      </ConfigProvider>
    </I18nextProvider>
  );
}
