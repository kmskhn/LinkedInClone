import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import classes from "./index.module.scss";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

function Header() {

  const dispatch = useDispatch();

  const logoutHandler = () => {
    console.log('LOGOUT');
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className={classes.header}>
      <div className={classes.header__left}>
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />
        <div className={classes.header__search}>
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className={classes.header__right}>
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Message" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions avatar={true} onClick={logoutHandler} title="Me" />
      </div>
    </div>
  );
}

export default Header;

<div>
  Icons made by{" "}
  <a href="https://www.freepik.com" title="Freepik">
    Freepik
  </a>{" "}
  from{" "}
  <a href="https://www.flaticon.com/" title="Flaticon">
    www.flaticon.com
  </a>
</div>;
