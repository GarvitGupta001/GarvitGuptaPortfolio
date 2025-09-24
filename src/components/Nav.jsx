import React from "react";
import gsap from "gsap";
import {Link} from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import menu from "../assets/menu.svg";
import profile from "../assets/profile.svg";
import projects from "../assets/projects.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedIn.svg";
import instagram from "../assets/instagram.svg";
import resume from "../assets/resume.svg";
import resumePDF from "../assets/My_Resume.pdf";

const Nav = () => {
    const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 1024);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsLaptop(true);
            } else {
                setIsLaptop(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        console.log(isLaptop);
    }, [isLaptop]);
    const [expanded, setExpanded] = useState(false);
    const nav = useRef(null);

    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useGSAP(() => {
        let widthDependent = {close:{}, open: {}}
        if (isLaptop) {
            widthDependent.close['height'] = 52;
            widthDependent.open['height'] = "auto";
        } else {
            widthDependent.close['width'] = 52;
            widthDependent.open['width'] = "auto";
            // widthDependent.close['left'] = '20px'
            // widthDependent.open['left'] = '50%'
            // widthDependent.close['transform'] = 'translateX(0)'
            // widthDependent.open['transform'] = 'translateX(-50%)'
        }

        if (expanded) {
            gsap.to("nav", {
                duration: 0.5,
                ...widthDependent.open
            });
        } else {
            gsap.to("nav", {
                duration: 0.5,
                ...widthDependent.close,
            });
        }
    }, [expanded]);

    return (
        <nav
            ref={nav}
            className="fixed top-5 left-5 border-[#cfcfcf] flex lg:flex-col items-center p-1 overflow-hidden h-[52px] w-[52px] backdrop-brightness-35"
            onMouseEnter={isLaptop ? () => setExpanded(true) : null}
            onMouseLeave={isLaptop ? () => setExpanded(false) : null}
        >
            <img src={menu} alt="" className="p-[7px]" onClick={!isLaptop ? () => setExpanded(!expanded) : null}/>
            <Link to="/" className="nav-icon">
                <img src={profile} alt="" className="p-[7px]" />
            </Link>
            <Link to="/projects" className="nav-icon">
                <img src={projects} alt="" className="p-[7px]" />
            </Link>
            <a
                href="https://github.com/GarvitGupta001"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
            >
                <img src={github} alt="" className="p-[7px]" />
            </a>
            <a
                href="https://www.linkedin.com/in/garvitgupta001/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
            >
                <img src={linkedin} alt="" className="p-[7px]" />
            </a>
            <a
                href="https://www.instagram.com/garvit.gupta.01/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
            >
                <img src={instagram} alt="" className="p-[7px]" />
            </a>
            <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
            >
                <img src={resume} alt="" className="p-[7px]" />
            </a>
        </nav>
    );
};

export default Nav;
