import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import classes from "./index.module.scss";

const recentItem = (topic) => {
  return (
    <div className={classes.sidebar__recentitem}>
      <span className={classes.sidebar__hash}>#</span>
      <p>{topic}</p>
    </div>
  );
};

function Sidebar() {

  const user = useSelector(selectUser);



  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__top}>
        <img
          src="https://images.unsplash.com/photo-1618001429658-033064f07494?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className={classes.sidebar__avatar} >
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className={classes.sidebar__stats}>
        <div className={classes.sidebar_stat}>
          <p>Who Viewed you</p>
          <p className={classes.sidebar_number}>24532</p>
        </div>
        <div className={classes.sidebar_stat}>
          <p>View on Posts</p>
          <p className={classes.sidebar_number}>24760</p>
        </div>
      </div>

      <div className={classes.sidebar__bottom}>
        <p className={classes.sidebar__recent}>Recent</p>
        {recentItem("Design")}
        {recentItem("Development")}
        {recentItem("React Js")}
        {recentItem("Bootstrap")}
        {recentItem("Javascript")}
        {recentItem("React Native")}
      </div>
    </div>
  );
}

export default Sidebar;
