import React, { useEffect, useState } from 'react';
import { ProjectDetails } from '../../lib/interfaces';
import { ProjectType } from '../../lib/types';
import ProjectCard from './ProjectCard/ProjectCard';
import './Projects.scss';

export default function Projects() {
  const [data, setData] = useState([]);

  const getProjects = () => {
    fetch('db/projects.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        const filteredProjects = myJson.projects.filter(
          (obj: ProjectDetails) => {
            return obj.isActive;
          }
        );
        setData(filteredProjects);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="projects" id="Projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {data &&
          data.length > 0 &&
          data.map((project: ProjectType) => (
            <ProjectCard key={project.id} data={project} />
          ))}
      </div>
    </div>
  );
}
