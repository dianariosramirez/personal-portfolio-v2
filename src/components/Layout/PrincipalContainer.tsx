"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const roles = [
  "Web Developer",
  "Software Developer",
  "Frontend Developer",
  "Web Designer Developer",
];

const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia laboral" },
  { href: "#educacion", label: "Educación" },
  { href: "#skills", label: "Skills" },
  { href: "#contacto", label: "Contacto" },
];

export const PrincipalContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [activeSection, setActiveSection] = useState("sobre-mi");
  const mainRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Efecto para el cambio de roles
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

  // Efecto para observar las secciones y actualizar navegación activa
  useEffect(() => {
    if (!mainRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          let visibleSection = activeSection;
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const intersectionRatio = entry.intersectionRatio;
              if (intersectionRatio > 0.5) {
                visibleSection = entry.target.id;
              }
            }
          });

          if (visibleSection === activeSection) {
            const sections = Array.from(mainRef.current!.querySelectorAll('section[id]'));
            const visibleSections = sections.filter(section => {
              const rect = section.getBoundingClientRect();
              return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 3;
            });

            if (visibleSections.length > 0) {
              visibleSections.sort((a, b) => {
                const aDistance = Math.abs(a.getBoundingClientRect().top - window.innerHeight / 3);
                const bDistance = Math.abs(b.getBoundingClientRect().top - window.innerHeight / 3);
                return aDistance - bDistance;
              });

              visibleSection = visibleSections[0].id;
            }
          }

          if (visibleSection && visibleSection !== activeSection) {
            setActiveSection(visibleSection);
            window.history.replaceState(null, '', `#${visibleSection}`);
          }
        }, 100);
      },
      {
        root: mainRef.current,
        threshold: [0.1, 0.5, 0.9],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    const sections = mainRef.current.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    const hash = window.location.hash.replace('#', '');
    if (hash && navLinks.some(link => link.href === `#${hash}`)) {
      setActiveSection(hash);
    }

    return () => {
      observerRef.current?.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (mainRef.current) {
      const targetId = href.replace('#', '');
      const targetSection = mainRef.current.querySelector(`#${targetId}`) as HTMLElement;

      if (targetSection) {
        mainRef.current.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: 'smooth'
        });

        setActiveSection(targetId);
        window.history.replaceState(null, '', `#${targetId}`);
      }
    }
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      [style*="overflow-y: auto"]::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
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
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    ...styles.navLink,
                    color: isActive ? "white" : "#aaa",
                    fontWeight: isActive ? 500 : 400,
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      ...styles.dot,
                      backgroundColor: isActive ? "white" : "transparent",
                    }}
                  />
                  <span style={styles.navText}>{link.label}</span>
                </a>
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
        <main
          ref={mainRef}
          style={styles.main}
        >
          {children}
        </main>
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
    marginBottom: "10%",
    textAlign: "center",
  },
  socials: {
    width: "80%",
    display: "flex",
    justifyContent: "space-evenly",
    margin: "0 auto",
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
  container: {
    display: "flex",
    flexDirection: "row",
    width: "97%",
    height: "95%",
    border: "0.5px solid white",
    color: "white",
  },
  sidebar: {
    width: "30%",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    position: "sticky",
    top: 0,
  },
  main: {
    width: "70%",
    paddingRight: "25px",
    paddingLeft: "10%",
    height: "100%",
    overflowY: "auto",
    scrollBehavior: "smooth",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },
};