import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import resumePDF from "../assets/My_Resume.pdf";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import ArrowForward from "../assets/arrow-forward.svg";

const Profile = () => {
    const work = useRef(null);
    const [workHover, setWorkHover] = useState(false);
    useGSAP(() => {
        // Animate the parent container's gap
        gsap.to(work.current, {
            duration: 0.3,
            gap: workHover ? "20px" : "4px",
            ease: "power2.inOut",
        });

        // Animate the text's glow effect using textShadow
        gsap.to("h1", {
            duration: 0.3,
            textShadow: workHover ? "0 0 10px #F2F2F2, 0 0 20px #F2F2F2" : "none",
            ease: "power2.inOut",
        });

        // Animate the image's glow effect using a drop-shadow filter
        gsap.to("img", {
            duration: 0.3,
            filter: workHover ? "drop-shadow(0 0 8px #F2F2F2)" : "none",
            ease: "power2.inOut",
        });

    }, { dependencies: [workHover], scope: work });

    const [isMD, setIsMD] = useState(window.innerWidth >= 1024);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMD(true);
            } else {
                setIsMD(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const skills = [
        { id: 1, name: "React Js", image: "skills/react.png" },
        { id: 2, name: "Node", image: "skills/node.png" },
        { id: 3, name: "Express Js", image: "skills/express.png" },
        { id: 4, name: "Mongo DB", image: "skills/mongodb.png" },
        { id: 5, name: "Next.js", image: "skills/next.png" },
        { id: 6, name: "Flask", image: "skills/flask.png" },
        { id: 7, name: "MySQL", image: "skills/mysql.png" },
        { id: 8, name: "Tailwind CSS", image: "skills/tailwind.png" },
    ];

    return (
        <div id="profile" className="h-[100%] dark:text-[#FBF9FF] pt-[80px]">
            <div
                id="intro"
                className="h-[40%] flex flex-col md:flex-row md:justify-start items-center gap-4"
            >
                <div className="md:h-[100%] md:pl-[80px] flex md:justify-end items-center md:w-[35%]">
                    <img
                        src="pfp.jpg"
                        alt=""
                        className="h-[150px] md:h-[300px] md:w-[300px] rounded-full"
                    />
                </div>
                <div className="flex flex-col md:flex-row md:justify-between items-center w-[100%] h-[100%] md:pl-[52px]">
                    <div className="flex flex-col justify-center gap-[36px] items-center md:items-start">
                        <div className="flex flex-col items-center md:items-start">
                            <h1 className="text-4xl md:text-6xl tracking-wider font-semibold mb-[4px] md:mb-[12px]">
                                Garvit Gupta
                            </h1>
                            <h2 className="text-xl md:text-4xl font-light text-[#7F7F7F] mb-[4px]">
                                Full-Stack Developer
                            </h2>
                        </div>
                        <div className="flex">
                            <AnimatedTooltip items={skills} />
                        </div>
                    </div>
                    {isMD ? (
                        <div className="flex flex-col items-center gap-5 w-[60%]">
                            <Link
                                ref={work}
                                onMouseEnter={() => setWorkHover(true)}
                                onMouseLeave={() => setWorkHover(false)}
                                to="/projects"
                                className="text-6xl flex gap-1 items-center h-[100%]"
                            >
                                <h1>My Work</h1>
                                <img src={ArrowForward} alt="" />
                            </Link>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Profile;
