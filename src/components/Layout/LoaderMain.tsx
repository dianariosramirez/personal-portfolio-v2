"use client";

import { useState, useEffect } from "react";

export const LoaderMain = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000);
    const hideTimer = setTimeout(() => setVisible(false), 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#000",
        color: "#fff",
        fontSize: "2rem",
        textAlign: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease",
      }}
    >
      <p style={{ fontWeight: "300", margin: 0 }}>Diana Rios,</p>
      &nbsp;
      <p style={{ fontWeight: "500", margin: 0 }}>Portafolio</p>
    </div>
  );
};
