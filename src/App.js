import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import ContentBanner from "./components/ContentBanner";
import FeatureCard from "./components/FeatureCard";
import Header from "./components/Header";
import { bannerData, featureList } from "./staticData";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="Features">
        {featureList.map((feature) => (
          <FeatureCard
            imgUrl={feature.imgUrl}
            title={feature.title}
            info={feature.info}
          />
        ))}
      </div>
      <div className="banners">
        {bannerData.map((banner) => (
          <ContentBanner
            imgUrl={banner.imgUrl}
            title={banner.title}
            info={banner.info}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
