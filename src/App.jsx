import React, { useEffect, useRef } from "react";
import "./app.css";
import Nav from "./components/Nav";
import Cursor from "./components/Cursor";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Background from "./components/Background";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden h-screen w-screen relative no-scrollbar">
        <Background />
        <Cursor />
        <Nav />
        <Profile />
        <Projects />
      </div>
    </>
  );
};

export default App;
