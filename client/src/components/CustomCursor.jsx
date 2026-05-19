import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  const [isHovering, setIsHovering] =
    useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    // Detect hover on clickable items

    const hoverElements =
      document.querySelectorAll(
        "button, a"
      );

    hoverElements.forEach((el) => {
      el.addEventListener(
        "mouseenter",
        handleMouseOver
      );

      el.addEventListener(
        "mouseleave",
        handleMouseLeave
      );
    });

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      hoverElements.forEach((el) => {
        el.removeEventListener(
          "mouseenter",
          handleMouseOver
        );

        el.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}

      <div
        className={`
          fixed
          top-0
          left-0
          z-[9999]
          pointer-events-none
          rounded-full
          transition-transform
          duration-150
          ease-out
          hidden lg:block

          ${
            isHovering
              ? "w-16 h-16"
              : "w-6 h-6"
          }
        `}
        style={{
          transform: `translate(
            ${position.x}px,
            ${position.y}px
          ) translate(-50%, -50%)`,

          background:
            "linear-gradient(to right, #ec4899, #3b82f6)",

          boxShadow:
            "0 0 25px rgba(236,72,153,0.8)",

          mixBlendMode: "screen",
        }}
      ></div>

      {/* Outer Ring */}

      <div
        className="
          fixed
          top-0
          left-0
          z-[9998]
          pointer-events-none
          rounded-full
          border
          border-white/30
          hidden lg:block
        "
        style={{
          width: "45px",

          height: "45px",

          transform: `translate(
            ${position.x}px,
            ${position.y}px
          ) translate(-50%, -50%)`,

          transition:
            "all 0.15s ease-out",
        }}
      ></div>
    </>
  );
}

export default CustomCursor;