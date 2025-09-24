import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Profile = () => {
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
        <div
            id="profile"
            className="h-[100%]"
        >
          {}
        </div>
    );
};

export default Profile;
