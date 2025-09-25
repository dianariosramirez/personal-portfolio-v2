import { CardMain } from "@/components/Projects/CardMain";
import { dataProjects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "2rem",

        padding: "2rem",
      }}
    >
      {dataProjects.map((project, index) => (
        <CardMain key={index} project={project} />
      ))}
    </div>
  );
}
