"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function StarRain() {
  useEffect(() => {
    const container = document.createElement("div");
    container.id = "star-container";
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.overflow = "hidden";
    container.style.pointerEvents = "none";
    container.style.zIndex = "-1";

    document.body.appendChild(container);

    function spawnInitialStars(count: number = 50) {
      for (let i = 0; i < count; i++) {
        const star = document.createElement("span");
        star.classList.add("star");
        star.innerText = "𒊹";
        star.style.position = "absolute";
        star.style.color = "white";
        const startTop = Math.random() * 100;
        star.style.top = `${startTop}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.fontSize = `${1 + Math.random() * 3}px`;
        star.style.opacity = (0.5 + Math.random() * 0.5).toString();

        container.appendChild(star);

        gsap.fromTo(
          star,
          { y: 0 },
          {
            y: `${100 - startTop}vh`,
            duration: 10 + Math.random() * 20,
            repeat: -1,
            ease: "none",
            immediateRender: true,
            onRepeat: () => {
              star.style.left = `${Math.random() * 100}vw`;
              star.style.top = `-${Math.random() * 10}vh`;
              gsap.set(star, { y: 0 });
            },
          }
        );
      }
    }

    function spawnFallingStars(count: number = 20) {
      for (let i = 0; i < count; i++) {
        const star = document.createElement("span");
        star.classList.add("star");
        star.innerText = "𒊹";
        star.style.position = "absolute";
        star.style.color = "white";
        star.style.top = `-${Math.random() * 10}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.fontSize = `${1 + Math.random() * 3}px`;
        star.style.opacity = "0.8";

        container.appendChild(star);

        gsap.fromTo(
          star,
          { y: 0 },
          {
            y: "110vh",
            duration: 15 + Math.random() * 20,
            repeat: -1,
            ease: "none",
            immediateRender: true,
            onRepeat: () => {
              star.style.left = `${Math.random() * 100}vw`;
              star.style.top = `-${Math.random() * 10}vh`;
              gsap.set(star, { y: 0 });
            },
          }
        );
      }
    }

    spawnInitialStars(20);
    spawnFallingStars(20);

    return () => {
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }, []);

  return null;
}
