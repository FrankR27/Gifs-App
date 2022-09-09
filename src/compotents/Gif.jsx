import React from "react";
import { Link } from "wouter";
import "./Gif.css";

function Gif({ id, title, url }) {
  return (
    <Link to={`/gif/${id}`} className="Gif">
      <h1>{title}</h1>
      <img src={url} alt={title} />
    </Link>
  );
}

export default Gif;
