import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProjectBySlug } from "./api";
import Showdown from "showdown";

const ProjectDetails = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const getProject = async () => {
      const data = await fetchProjectBySlug(slug);
      setProject(data);
    };

    getProject();
  }, [slug]);

  const converter = new Showdown.Converter();

  if (!project) return <p>Loading...</p>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(project.content),
        }}
      />
    </div>
  );
};

export default ProjectDetails;
