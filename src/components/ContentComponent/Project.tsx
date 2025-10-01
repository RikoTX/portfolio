"use client";
import React from "react";
import { Col, Row } from "antd";
import ProjectCard from "../ProjectCard/page";

export default function Project() {
  return (
    <div>
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-accent mb-6">
        Project
      </h1>
      <div className="p-15 max-w-5xl mx-auto">
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <ProjectCard
              name="SoundBloom"
              link="https://rikotx.github.io/SoundBloom/Home"
              img="/cardProject/SoundBloom.png"
              description="SoundBloom is a modern web app built with React and a minimalist approach that lets you listen to tracks directly in your browser, create a listening environment, and then add your own compositions."
              process={"Revision"}
              stack={[
                "React",
                "React-Router",
                "JavaScript",
                "Ant-Designer",
                "framer-motion",
              ]}
            />
          </Col>
          <Col span={12}>
            <ProjectCard
              name="Kinotower"
              link="https://rikotx.github.io/kinotower/"
              img="/cardProject/Kinotower.png"
              description="KinoTower is a web app about movies where you can view descriptions and posters, search for the movie you need, and easily find information about the movie in one place."
              process={true}
              stack={["React", "TypeScript", "Tailwind", "Ant-Designer"]}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
