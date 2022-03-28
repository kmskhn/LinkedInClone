import React from "react";
import classes from "./index.module.scss";
import { Avatar } from '@material-ui/core';
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";

function HeaderOptions({ onClick, avatar, title, Icon }) {

  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className={classes.headerOptions}>
      {Icon && <Icon className={classes.headerOptions__icon} />}
      {
        avatar &&
        <Avatar className={classes.headerOptions__icon} src={user?.photoURL}>
         {user?.email[0]}
        </Avatar>
      }

      {title && <p className={classes.headerOptions__title}>{title}</p>}
    </div>
  );
}

export default HeaderOptions;
