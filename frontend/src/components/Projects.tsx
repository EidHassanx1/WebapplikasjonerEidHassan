import Project from "./Project";

type ProjectType = {
    title: String;
};

type ProjectProps = {
    projects: ProjectType[];
};

export default function Projects({projects}: ProjectProps){
    return (
        <>
        {projects.map((project, index) => (
            <Project key={index} title={project.title} />
        ))}
        </>
    );
}