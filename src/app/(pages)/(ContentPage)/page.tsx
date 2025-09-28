"use client";
import { Layout, Flex, ConfigProvider } from "antd";
import React, { useState } from "react";
import HeaderComponent from "@/components/Header/page";
import SiderComponent from "@/components/Sider/page";
import ContentComponent from "@/components/ContentComponent/page";

const { Header, Sider, Content } = Layout;

export default function ContentPage() {
  const [active, setActive] = useState("About");
  return (
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
        <Header className="fixed top-4 left-3/5 -translate-x-1/2 w-[1200px] h-16 px-12 flex justify-center items-center m-0 z-50 bg-[rgba(22,22,22,0.91)] select-none rounded-2xl">
          <HeaderComponent active={active} setActive={setActive} />
        </Header>
        <Layout className="flex flex-row pt-22">
          <Sider className="text-center text-white" width={345}>
            <SiderComponent />
          </Sider>
          <Content>
            <ContentComponent active={active} />
          </Content>
        </Layout>
      </Flex>
    </ConfigProvider>
  );
}
