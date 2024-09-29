import { ProjectType } from './Types';

type ProjectProps = {
    projects: ProjectType[];
    onRemoveProject: (index: number) => void;
};

const groupByCategory = (projects: ProjectType[]) => {
    return projects.reduce((acc, project) => {
        acc[project.category] = (acc[project.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);
};

export default function Projects({ projects, onRemoveProject }: ProjectProps) {
    const categoryTotals = groupByCategory(projects);

    return (
        <>
        <div>
            {projects.length > 0 && (
                <div>
                    {Object.entries(categoryTotals).map(([category, total], index) => (
                        <h3 key={index}>TOTALT PROSJEKTER {total}</h3>
                    ))}
                </div>
            )}

            {projects.length === 0 ? (
                <p>INGEN PROSJEKTER ENDA, så lag dem.</p>
            ) : (
                <div>
                    {projects.map((project, index) => (
                        <article key={index}>
                            <p>{project.title}</p>
                            <button onClick={() => onRemoveProject(index)}>FJERN</button>
                        </article>
                    ))}
                </div>
            )}
        </div>
        </>
    );
}