import React from "react";
import "./css/ContentBanner.css";
function ContentBanner({ imgUrl, title, info }) {
  return (
    <div className="contentBanner" style={{ background: `url(${imgUrl})` }}>
      <div className="bannerContent">
        <h1>{title}</h1>
        <h2>{info}</h2>
      </div>
    </div>
  );
}

export default ContentBanner;
