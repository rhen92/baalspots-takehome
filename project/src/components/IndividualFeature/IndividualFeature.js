import React from "react";
import "./IndividualFeature.css";

const IndividualFeature = ({ title, description, link }) => {
  return (
    <article className="feature-styling">
      <h3 className="feature-title">{title}</h3>
      <p>{description}</p>
      <button className="learn-button" onClick={() => window.open(link, '_blank', 'resizable=yes')}>Learn more</button>
    </article>
  )
}

export default IndividualFeature;
