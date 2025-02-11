import React, { useEffect, useState } from "react";
import { fetchProjects } from "./api";
import Showdown from "showdown";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };

    getProjects();
  }, []);

  const converter = new Showdown.Converter();

  return (
    <div className="container">
    <h1>Projets</h1>
    <div className="project-list">
      {projects.length === 0 ? (
        <p>Aucun projet trouvé.</p>
      ) : (
        projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.titre || "Titre non disponible"}</h2>
            <p>{project.description || "Description non disponible"}</p>
            {project.slug && (
              <Link to={`/projects/${project.slug}`}>Voir le projet →</Link>
            )}
          </div>
        ))
      )}
    </div>
  </div>
);
};

export default ProjectsPage;
