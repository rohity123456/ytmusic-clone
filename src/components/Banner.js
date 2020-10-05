import { Button } from "@material-ui/core";
import React from "react";
import "./css/Banner.css";
function Banner() {
  return (
    <div className="banner">
      <img
        src="https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_logo_desktop_552x71.png"
        alt="img"
      />
      <div className="banner__main">
        <p className="largeP">Get Music Premium to listen ad-free,</p>
        <p className="largeP">offline & with your screen off</p>
      </div>
      <Button className="Linkbtn">Get Music Premium</Button>
      <h2>Prepaid and subscription plans available. Prices start at</h2>
      <h2 style={{ marginBottom: "1rem" }}>
        ₹99.00/month. Free trials available with subscription plans only.
      </h2>
      <p style={{ marginBottom: "1rem" }}>
        Or save money with a{" "}
        <span className="colorLink">family or student plan</span>
      </p>
      <h5 className="colorLink">Restrictions apply. Learn more here.</h5>
    </div>
  );
}

export default Banner;
