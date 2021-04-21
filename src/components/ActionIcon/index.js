import React from "react";
import classes from "./index.module.scss"

function ActionIcon({ Icon, color, text }) {
  return (
    <div className={classes.actionIcon}>
      {Icon && <Icon style={{ color: color }} />}
      {text && <h4>{text}</h4>}
    </div>
  );
}

export default ActionIcon;
