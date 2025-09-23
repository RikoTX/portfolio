"use client";
import React, { useState, useEffect } from "react";

const squareSize = 35;

interface WindowSize {
  width: number;
  height: number;
}

export default function GridBackground() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 1920,
    height: 1080,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columns = Math.ceil(windowSize.width / squareSize);
  const rows = Math.ceil(windowSize.height / squareSize);

  const squares = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      squares.push(
        <div
          key={`${x}-${y}`}
          style={{
            position: "absolute",
            left: x * squareSize,
            top: y * squareSize,
            width: squareSize,
            height: squareSize,
            border: "1px solid #0a0a0aff",
            boxSizing: "border-box",
          }}
        />
      );
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden",
        zIndex: -2,
      }}
    >
      {squares}
    </div>
  );
}
