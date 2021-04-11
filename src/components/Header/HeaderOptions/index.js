import React from "react";
import classes from "./index.module.scss";
import { Avatar } from '@material-ui/core';

function HeaderOptions({ avatar, title, Icon }) {
  return (
    <div className={classes.headerOptions}>
      {Icon && <Icon className={classes.headerOptions__icon} />}
      {avatar && <Avatar className={classes.headerOptions__icon} src={avatar}/>}

      {title && <p className={classes.headerOptions__title}>{title}</p>}
    </div>
  );
}

export default HeaderOptions;
