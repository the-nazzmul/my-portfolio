import First from "./SingleProject/First";
import Second from "./SingleProject/Second";
import Third from "./SingleProject/Third";


const Projects = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-12 dark:text-white">Some of my recent projects</h2>
            <div className="grid lg:grid-cols-3 gap-4 px-4 my-8">
                <First></First>
                <Second></Second>
                <Third></Third>
            </div>
        </div>
    );
};

export default Projects;