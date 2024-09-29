import { useState } from 'react';
import { ProjectType } from './Types';

type CreateProjectProps = {
    onAddProject: (project: ProjectType) => void;
};

export default function CreateProject({ onAddProject }: CreateProjectProps) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) {
            alert('Prosjekttittelen må fylles ut');
            return;
        }
    const newProject: ProjectType = {
        title,
        category: ''
    };

    onAddProject(newProject);
    setTitle('');
    };
    return (
        <>
        <div>
            <h2>Opprett nytt prosjekt</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">PROSJEKTTITTEL:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="SKRIV INN PROSJEKTTTITTEL"
                    />
                </div>
                <button type="submit">LEGG TIL PROSJEKT</button>
            </form>
        </div>
        </>
    )

}