import React from "react";

function ProjectCard(props) {
  return (
    <div className="col-md-4 mb-4 ">
      <div className="card h-100 d-flex flex-column text-center border border-light shadow-sm">
        {/* project image */}
        <img
          className="card-img-top"
          src={props.image}
          alt={props.name}
        />
        <div className="card-body d-flex flex-column flex-grow-1">          
          {/* project information */}
          <h5>{props.name}</h5>
          <p className="card-text text-secondary flex-grow-1">{props.description}</p>
          <div className="mt-auto d-inline-flex justify-content-center gap-3">
            {/* Url and GitHub links */}
            <a href={props.url} className="btn btn-info" target="_blank">Website</a>
            <a href={props.github} className="btn btn-info" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

