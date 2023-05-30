import React from 'react';

function ProjectPage(props) {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Project Name: {props.projectName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;