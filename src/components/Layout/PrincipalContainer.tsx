"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const roles = [
  "Web Developer",
  "Software Developer",
  "Frontend Developer",
  "Web Designer Developer",
];

const navLinks = [
  { href: "/", label: "Sobre mí" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/experiencia", label: "Experiencia laboral" },
  { href: "/educacion", label: "Educación" },
  { href: "/skills", label: "Skills" },
  { href: "/contacto", label: "Contacto" },
];

export const PrincipalContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setFade(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <h1 style={styles.name}>Diana Rios</h1>
          <p
            style={{
              ...styles.role,
              opacity: fade ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {roles[currentRoleIndex]}
          </p>

          {/* Navigation */}
          <nav style={styles.nav}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    ...styles.navLink,
                    color: isActive ? "white" : "#aaa",
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  <span
                    style={{
                      ...styles.dot,
                      backgroundColor: isActive ? "white" : "transparent",
                    }}
                  />
                  <span style={styles.navText}>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Social + Footer */}
          <div style={styles.footer}>
            <div style={styles.socials}>
              <a
                href="https://www.linkedin.com/in/dianariosram/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/dianariosramirez"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/juquii.wn"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
              >
                <FaInstagram />
              </a>
            </div>
            <p style={styles.copy}>© 2025 Diana Rios</p>
          </div>
        </aside>

        {/* Main content */}
        <main style={styles.main}>{children}</main>
      </div>
    </div>
  );
};

/* --- Styles --- */
const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "97%",
    height: "95%",
    border: "1px solid white",
    color: "white",
  },
  sidebar: {
    width: "30%",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  name: {
    fontSize: "4rem",
    fontWeight: 500,
    margin: 0,
    paddingTop: "10px",
  },
  role: {
    fontSize: "1rem",
    fontWeight: 400,
    marginTop: 0,
  },
  nav: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    paddingTop: "56px",
    gap: "8px",
  },
  navLink: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.3s ease",
  },
  navText: {
    position: "relative",
    transition: "all 0.3s ease",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    transition: "all 0.3s ease",
  },
  footer: {
    marginBottom: "10px",
    textAlign: "center",
  },
  socials: {
    width: "80%",
    display: "flex",
    justifyContent: "space-evenly",
    margin: "0 auto",
    paddingBottom: "5px",
    fontSize: "1.5rem",
  },
  socialIcon: {
    color: "white",
    transition: "color 0.3s ease",
  },
  copy: {
    fontSize: "0.8rem",
    margin: 0,
    paddingTop: "5px",
  },
  main: {
    width: "70%",
    height: "100%",
    paddingRight: "25px",
    paddingLeft: "10%",
  },
};
