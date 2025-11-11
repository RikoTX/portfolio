"use client";
import React from "react";
import { Col, Row } from "antd";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/page";
import { useTranslation } from "react-i18next";

export default function Project() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-accent mb-6">
        {t("contentPageProject.title")}
      </h1>

      <div className="p-15 max-w-5xl mx-auto">
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-3xl text-left text-2xl font-semibold mb-14 "
            >
              <ProjectCard
                name={t("contentPageProject.titleSounbloom")}
                link="https://rikotx.github.io/SoundBloom/Home"
                img="/cardProject/SoundBloom.png"
                description={t("contentPageProject.textSoundbloom")}
                process={t("contentPageProject.processRevision")}
                stack={[
                  "React",
                  "React-Router",
                  "JavaScript",
                  "Ant-Designer",
                  "framer-motion",
                ]}
              />
            </motion.div>
          </Col>

          <Col span={12}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full max-w-3xl text-left text-2xl font-semibold mb-14 "
            >
              <ProjectCard
                name={t("contentPageProject.titleKinotower")}
                link="https://rikotx.github.io/kinotower/"
                img="/cardProject/Kinotower.png"
                description={t("contentPageProject.textKinotower")}
                process={false}
                stack={["React", "TypeScript", "Tailwind", "Ant-Designer"]}
              />
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
