import React from "react";
import { Link } from "wouter";
import './Gif.css';

const Gif = ({ title, url, id }) => {
  
  return (
    <Link to={`/gif/detail/${id}`} className="gif">
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </Link>
  );
};

export default Gif;
