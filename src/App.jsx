import React, { useState, useEffect, useRef } from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Cursor from "./components/Cursor";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Background from "./components/Background";

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <div className="overflow-x-hidden h-screen w-screen relative no-scrollbar bg-[#000807]">
                {windowWidth >= 1024 ? <Cursor /> : null}
                <Nav />
                <div className="h-screen w-screen">
                    <Routes>
                        <Route path="/" element={<Profile />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default App;
