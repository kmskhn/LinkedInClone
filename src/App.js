import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import LoginForm from "./components/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
      }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      {
        user ?
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              {/* {Widgets} */}
            </div>
          </> :
          <LoginForm/>
      }

    </div>
  );
}

export default App;
