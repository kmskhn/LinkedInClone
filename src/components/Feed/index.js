import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import classes from "./index.module.scss";
import ImageIcon from "@material-ui/icons/Image";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";

import ActionIcon from "../ActionIcon";
import Post from "../Post";
import { db } from "../../firebase";
function Feed() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setposts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
    return () => {
      cleanup;
    };
  }, [input]);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.feed}>
      <div className={classes.feed__inputContainer}>
        <div className={classes.feed__input}>
          <CreateIcon />
          <form onSubmit={sendPost}>
            <input type="text" />
          </form>
        </div>
        <div className={classes.feed__actionIcons}>
          <ActionIcon Icon={ImageIcon} text="Photo" />
          <ActionIcon Icon={SubscriptionsIcon} text="Video" />
          <ActionIcon Icon={EventNoteIcon} text="Event" />
          <ActionIcon Icon={CalendarViewDayIcon} text="Write Article" />
        </div>
      </div>
      {posts && (
        <Post
          name="Kalim"
          description="this is a test"
          message="message goes here"
        />
      )}

      {/**Posts */}
    </div>
  );
}

export default Feed;
