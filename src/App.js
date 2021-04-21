import React from "react";
import Header from "./components/Header";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="app">
      {/* {Header} */}
      <Header />
      {/* {App} */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* {Widgets} */}
      </div>
    </div>
  );
}

export default App;
