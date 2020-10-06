import React from "react";
import "./css/ContentBanner.css";
function ContentBanner({ imgUrl, title, info }) {
  return (
    <div className="contentBanner" style={{ background: `url(${imgUrl})` }}>
      <div className="bannerContent">
        <h1 className="largeP">{title}</h1>
        <div>
          <h2>{info}</h2>
        </div>
      </div>
    </div>
  );
}

export default ContentBanner;
