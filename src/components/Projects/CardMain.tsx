import { skills } from "@/lib/skills";
import React from "react";
interface CardProps {
  project: {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    repo: string;
    technologies: string[];
  };
}

export const CardMain = ({ project }: CardProps) => {
  return (
    <div
      style={{
        fontWeight: "300",
        width: "100%",
        textAlign: "right",
        padding: "1rem",
        borderBottom: "1px solid #ccc",
      }}
    >
      <p style={{ fontSize: "4rem", margin: 0 }}>{project.title}</p>
      <p>{project.description}</p>
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        {project.technologies.map((tech) => (
          <span key={tech}>{skills[tech as keyof typeof skills]}</span>
        ))}
      </div>
    </div>
  );
};
