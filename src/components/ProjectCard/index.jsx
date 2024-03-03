import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="col-md-4 mb-4 ">
      <div className="card h-100 d-flex flex-column text-center">
        <img className="card-img-top" src={props.image} alt={props.name} />
        <div className="card-body d-flex flex-column flex-grow-1">
          <h5>{props.name}</h5>
          <p className="card-text text-secondary flex-grow-1">{props.description}</p>
          <div class="mt-auto d-inline-flex justify-content-center gap-3">
            <a href={props.url} class="card-link btn btn-light">Website</a>
            <a href={props.github} class="card-link btn btn-light">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

