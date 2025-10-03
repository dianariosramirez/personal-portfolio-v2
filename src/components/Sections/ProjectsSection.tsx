import { dataProjects } from '@/lib/projects'
import React from 'react'
import { CardMain } from '../Projects/CardMain'

export const ProjectsSection = () => {
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
  )
}
