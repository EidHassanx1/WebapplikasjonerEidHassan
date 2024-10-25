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
                            <p>{project.title}</p>
                            <button onClick={() => onRemoveProject(project.id)}>FJERN</button>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}
