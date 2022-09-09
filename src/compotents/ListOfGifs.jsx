import React from "react";
import Gif from "./Gif";
import "./ListOfGifs.css";

function ListOfGifs({ gifs }) {
  return (
    <div>
      {gifs.map(({ id, title, url }) => {
        return <Gif key={id} id={id} title={title} url={url} />;
      })}
    </div>
  );
}

export default ListOfGifs;
