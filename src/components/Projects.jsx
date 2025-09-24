import { ExpandableCardDemo } from "./ExpendableCards";

const Projects = () => {
    return (
        <div className="h-[100%] py-10 px-4" id="projects">
            <h1 className="text-4xl font-bold text-center text-white pb-2">
                My Work
            </h1>
            <div>
                <ExpandableCardDemo />
            </div>
        </div>
    );
};

export default Projects;
