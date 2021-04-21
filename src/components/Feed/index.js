import React, { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import classes from "./index.module.scss";
import ImageIcon from "@material-ui/icons/Image";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";

import ActionIcon from "../ActionIcon";
import Post from "../Post";
import { db } from "../../firebase";
import firebase from 'firebase';

function Feed() {
  const [posts, setposts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setposts(snapshot.docs.map((doc) => (
          {
            id: doc.id,
            data: doc.data()
          }
        )))
      );
    return () => {
    };
  }, []);

  const inputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }

  const sendPost = (e) => {
    e.preventDefault();
    console.log('form submitted')
    db.collection('posts').add({
      name: "Kalim",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
  };

  return (

    <div className={classes.feed}>
      <div className={classes.feed__inputContainer}>
        <div className={classes.feed__input}>
          <CreateIcon />
          <form onSubmit={sendPost}>
            <input value={input} type="text" onChange={inputHandler} />
          </form>
        </div>

        <div className={classes.feed__actionIcons}>
          <ActionIcon Icon={ImageIcon} text="Photo" />
          <ActionIcon Icon={SubscriptionsIcon} text="Video" />
          <ActionIcon Icon={EventNoteIcon} text="Event" />
          <ActionIcon Icon={CalendarViewDayIcon} text="Write Article" />
        </div>
      </div>
      {
        posts?.map(({
          id, data: {
            name,
            description,
            message,
            photoUrl,
            timestamp
          }
        }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
              timestamp={timestamp}
            />
          )
        )
      }
    </div>
  )
}

export default Feed;
