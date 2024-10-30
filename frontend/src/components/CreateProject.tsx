import { useState } from 'react';
import { ProjectType } from './Types';

type CreateProjectProps = {
    onAddProject: (project: ProjectType) => void;
};

export default function CreateProject({ onAddProject }: CreateProjectProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState<'draft' | 'published'>('draft');
    const [apublic, setPublic] = useState<'true' | 'false'>('true');
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState('');

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
            status,
            apublic,
            tags,
            id: 0
        };

        onAddProject(newProject);
        setTitle('');
        setDescription('');
        setStatus('draft');
        setPublic('true');
        setTags([]);
    };

    const handleAddTag = () => {
        if (tagInput.trim()) {
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
        }
    }

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
                <div>
                    <label>STATUS: </label>
                    <label>
                        <input
                            type="radio"
                            name="status"
                            value="draft"
                            checked={status === 'draft'}
                            onChange={() => setStatus('draft')}
                        />
                        Draft
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="status"
                            value="published"
                            checked={status === 'published'}
                            onChange={() => setStatus('published')}
                        />
                        Published
                    </label>
                </div>
                <div>
                    <label>PUBLIC: </label>
                    <label>
                        <input
                            type="radio"
                            name="public"
                            value="true"
                            checked={apublic === 'true'}
                            onChange={() => setPublic('true')}
                        />
                        True
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="public"
                            value="false"
                            checked={apublic === 'false'}
                            onChange={() => setPublic('false')}
                        />
                        False
                    </label>
                </div>
                <div>
                    <label>TAGS: </label>
                    <input
                        type="text"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        placeholder="Legg til tag"
                    />
                    <button type="button" onClick={handleAddTag}>Legg til tag</button>
                    <div>
                        {tags.map((tag, index) => (
                            <span key={index} style={{marginRight: '8'}}>{tag}</span>
                        ))}
                    </div>
                </div>
                <button type="submit">LEGG TIL PROSJEKT</button>
            </form>
        </div>
    );
}
