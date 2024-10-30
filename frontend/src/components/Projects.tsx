import { ProjectType } from './Types';

type ProjectProps = {
    projects: ProjectType[];
    onRemoveProject: (id: number) => void;
};

export default function Projects({ projects, onRemoveProject }: ProjectProps) {
    return (
        <div>
            {projects.length > 0 && (
                <h3>TOTALT PROSJEKTER: {projects.length}</h3>
            )}
            {projects.length === 0 ? (
                <p>Ingen prosjekter enda. SÅ LAG DEM!</p>
            ) : (
                <div>
                    {projects.map((project) => (
                        <article key={project.id}>
                            <p>{project.title.toLocaleUpperCase()}</p>
                            <p>{project.description}</p>
                            <p>Status: {project.status}</p>
                            <p>Public: {project.apublic}</p>
                            <p>Tags: {project.tags}</p>
                            <p>Created At - {new Date(project.createdAt || Date.now()).toLocaleString()}</p>
                            <button onClick={() => onRemoveProject(project.id)}>FJERN</button>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}
