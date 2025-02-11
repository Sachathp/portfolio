import React, { useEffect, useState } from "react";
import { fetchProjects } from "./api";
import Showdown from "showdown";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      console.log("🚀 `useEffect` lancé !");
      const data = await fetchProjects();
      console.log("Projects Data:", data);
      console.log("📡 Données reçues de l'API :", data);
      setProjects(data);
    };

    getProjects();
  }, []);

  const converter = new Showdown.Converter();

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => (
        
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <Link to={`/projects/${project.slug}`}>Voir le projet</Link>
          <div
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(project.content),
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
