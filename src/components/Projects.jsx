import React from "react";
import SearchBar from './SearchBar';
import { SEARCH_QUERIES } from "./SearchQueries";
import ProjectMeta from "./ProjectMeta";
import './Projects.css'

function Projects() {
  const handleShowAllProjects = (e) => {
    e.preventDefault();
  };

  const handleNewProject = (e) => {
    const searchPath = `./projects/project-meta/new`;
    window.location.href = searchPath;
    <ProjectMeta />
  };

  return (
    <div className="projects">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Projects</h1>
            <div className="Projects-buttons">
              <button className="Projects-all" onClick={handleShowAllProjects}>
                Show All Projects
              </button>
              <button className="Projects-new" onClick={handleNewProject}>
                Create New Project
              </button>
            </div>
            <div className="searchComponent">
              <SearchBar data={ SEARCH_QUERIES } />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
