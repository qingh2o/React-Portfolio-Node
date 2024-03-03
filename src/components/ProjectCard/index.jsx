import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div class="card h-100">
    <img class="card-img-top" src={props.image} alt={props.name}/>
    <div class="card-body d-flex flex-column">
        <h5>{props.name}</h5>
        <p class="card-text text-secondary">{props.description}</p>
        <a href={props.url} class="btn btn-secondary stretched-link mt-auto">Website</a>
        <a href={props.github}  class="btn btn-secondary stretched-link mt-auto">GitHub</a>
    </div>
</div>
  );
}

export default FriendCard;

