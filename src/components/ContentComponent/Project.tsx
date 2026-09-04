"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/page";
import { useTranslation } from "react-i18next";

export default function Project() {
  const { t } = useTranslation();

  return (
    <div className="w-full min-w-0">
      <h1 className="mb-6 break-words px-2 text-center text-3xl font-semibold text-accent md:text-4xl">
        {t("contentPageProject.title")}
      </h1>

      <div className="mx-auto w-full min-w-0 max-w-5xl p-4 min-[1240px]:p-15">
        <div className="grid grid-cols-1 gap-6 min-[1240px]:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 w-full min-w-0 text-left text-2xl font-semibold min-[1240px]:mb-14"
          >
            <ProjectCard
              name={t("contentPageProject.titleSounbloom")}
              link="https://rikotx.github.io/SoundBloom/Home"
              img="/cardProject/SoundBloom.png"
              description={t("contentPageProject.textSoundbloom")}
              process={false}
              stack={[
                "React",
                "React-Router",
                "JavaScript",
                "Ant-Designer",
                "framer-motion",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-6 w-full min-w-0 text-left text-2xl font-semibold min-[1240px]:mb-14"
          >
            <ProjectCard
              name={t("contentPageProject.titleKinotower")}
              link="https://rikotx.github.io/kinotower/"
              img="/cardProject/Kinotower.png"
              description={t("contentPageProject.textKinotower")}
              process={t("contentPageProject.processRevision")}
              stack={["React", "TypeScript", "Tailwind", "Ant-Designer"]}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
