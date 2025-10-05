"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);
interface GrowthProps {
  setActive: (item: string) => void;
}
export default function Growth({ setActive }: GrowthProps) {
  const containerRef = useRef(null);
  const textBlocksRef = useRef([]);
  const { t } = useTranslation();
  const texts = t("contentPageGrowth.texts", { returnObjects: true });

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !textBlocksRef.current.includes(el)) {
      textBlocksRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${texts.length * 1000}`,
          scrub: true,
          pin: true,
        },
      });

      textBlocksRef.current.forEach((block, index) => {
        tl.fromTo(
          block,
          { opacity: 0, scale: 0.8, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 1 }
        );

        if (index !== textBlocksRef.current.length - 1) {
          tl.to(
            block,
            {
              opacity: 0,
              scale: 0.8,
              y: -50,
              duration: 1,
            },
            "+=0.5"
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-accent mb-6">
        {t("contentPageGrowth.title")}
      </h1>

      <div className="max-w-2xl mx-auto text-center px-4">
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12">
          {t("contentPageGrowth.text1")}
        </p>
      </div>

      <div className="flex flex-col max-w-2xl mx-auto text-center px-4 text-2xl text-gray-400/50">
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <h1> {t("contentPageGrowth.scrollDown")}</h1>
          <ArrowDownOutlined />
        </motion.div>
      </div>

      <div ref={containerRef} className="relative mt-150">
        {texts.map((text, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-semibold text-white rounded-xl px-6 py-4 shadow-lg max-w-2xl mx-auto">
                {text}
              </div>

              {index === texts.length - 1 && (
                <div className="flex flex justify-between">
                  <motion.button
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-6 flex items-center gap-2 bg-accent px-6 py-3 rounded-xl text-white shadow-lg"
                  >
                    <ArrowUpOutlined />
                    {t("contentPageGrowth.returnToTop")}
                  </motion.button>
                  <motion.button
                    onClick={() => setActive("education")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-6 flex items-center gap-2 bg-accent px-6 py-3 rounded-xl text-white shadow-lg"
                  >
                    <ArrowRightOutlined />
                    {t("contentPageGrowth.education")}
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        ))}

        <div style={{ height: `${texts.length * 100}px` }} />
      </div>
    </div>
  );
}
