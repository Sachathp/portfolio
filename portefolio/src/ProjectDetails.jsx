import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProjectBySlug } from "./api";
import Showdown from "showdown";
import { Link } from "react-router-dom";


const ProjectDetails = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const getProject = async () => {
      const data = await fetchProjectBySlug(slug);
      if (data) {
        setProject(data);
      }
    };

    getProject();
  }, [slug]);

  const converter = new Showdown.Converter();

  if (!project) return <p>Loading...</p>;

  const extractTextFromContent = (contentArray) => {
    if (!Array.isArray(contentArray)) return "";
  
    return contentArray
      .map((block) =>
        block.children
          ? block.children
              .map((child) => {
                if (child.type === "text") {
                  return child.text;
                } else if (child.type === "link") {
                  return child.url; 
                }
                return "";
              })
              .join("")
          : ""
      )
      .join("\n\n"); 
  };
  

  const markdownContent = extractTextFromContent(project.contenu);
  const htmlContent = converter.makeHtml(markdownContent);

  return (
    <div className="container">
      <div className="project-details">
        <h1>{project.titre}</h1>
        <p>{project.description}</p>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
      <Link to="/">
        <button className="btn-return">Retour aux projets</button>
      </Link>
    
  </div>
  );
};

export default ProjectDetails;
