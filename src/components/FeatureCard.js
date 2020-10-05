import React from "react";
import "./css/FeatureCard.css";
function FeatureCard({ imgUrl, title, info }) {
  return (
    <div className="featureCard">
      <img src={imgUrl} alt="" />
      <h1 className="largeP">{title}</h1>
      <p>{info}</p>
    </div>
  );
}

export default FeatureCard;
