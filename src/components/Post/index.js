import { Avatar } from "@material-ui/core";
import React from "react";
import ActionIcon from "../ActionIcon";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import classes from "./index.module.scss";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className={classes.post}>
      <div className={classes.post__header}>
        <Avatar src={photoUrl}>
          {name[0]}
          </Avatar>
        <div className={classes.post__info}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={classes.post__body}>
        <p>{message}</p>
      </div>
      <div className={classes.post__actionIcons}>
        
        <ActionIcon Icon={ThumbUpOutlinedIcon} text="Like" color="#7085f9" />
        <ActionIcon Icon={ChatOutlinedIcon} text="Comment" color="#e7a33e" />
        <ActionIcon Icon={SendOutlinedIcon} text="Send" color="#c8c8c0" />
        <ActionIcon
          Icon={ShareOutlinedIcon}
          text="Share"
          color="#7fc15e"
        />
      </div>
    </div>
  );
}

export default Post;
