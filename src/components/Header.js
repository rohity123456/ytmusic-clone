import React from "react";
import "./css/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar, IconButton } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img className="header__logo" src="../../images/yt_logo.png" alt="" />
      </div>
      <div className="header__center">
        <input type="text" placeholder="Search" />
        <div>
          <SearchIcon />
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <VideoCallIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
