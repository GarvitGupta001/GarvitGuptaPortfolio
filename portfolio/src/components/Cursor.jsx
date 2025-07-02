import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CURSOR_SIZE = 16;

const Cursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        const x = e.clientX
        const y = e.clientY
        gsap.to(cursorRef.current, {
          x,
          y,
          duration: 0.2,
          overwrite: "auto",
        });
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <div
      id="cursor"
      ref={cursorRef}
    />
  );
};

export default Cursor;