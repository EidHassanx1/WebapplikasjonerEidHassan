import { useState } from 'react';
import { ProjectType } from './Types';

type CreateProjectProps = {
    onAddProject: (project: ProjectType) => void;
};

export default function CreateProject({ onAddProject }: CreateProjectProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) {
            alert('Prosjekttittelen må fylles ut');
            return;
        }
        if (!description) {
            alert('Prosjektbeskrivelsen må fylles ut');
            return;
        }

        const newProject: ProjectType = {
            title,
            description,
            category: '',
            id: 0
        };

        onAddProject(newProject);
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <h2>Opprett nytt prosjekt</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">PROSJEKTTITTEL: </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="SKRIV INN PROSJEKTTTITTEL"
                    />
                </div>
                <div>
                    <label htmlFor="description">BESKRIVELSE: </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Skriv inn prosjektbeskrivelse"
                    />
                </div>
                <button type="submit">LEGG TIL PROSJEKT</button>
            </form>
        </div>
    );
}
