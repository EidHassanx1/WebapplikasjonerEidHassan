import { useEffect, useState } from 'react';
import { ProjectType } from './Types';
import CreateProject from './CreateProject';
import Projects from './Projects';

export default function Page() {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  const handleAddProject = (newProject: ProjectType) => {
    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProject),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Feil ved oppretting av prosjekt');
        }
        return response.json();
      })
      .then(data => {
        const project = {
          id: data.id,
          title: data.title,
          category: data.category ?? '',
          description: data.description
        };
        setProjects([...projects, project]);
      })
      .catch(error => {
        console.error('Feil', error);
      });
  };

  const handleRemoveProject = (id: number) => {
    console.log(`Attempting to delete project with id: ${id}`);
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete project');
        }
        setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then(response => {
        if (!response.ok) {
          throw new Error('Feil ved henting av prosjekter');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
      })
      .catch(error => {
        console.error('Feil:', error);
      });
  }, []);

  return (
    <main>
      <div className="container">
        <h1>Administrasjonsside</h1>
        <div className="input-section">
          <h3>Legg til prosjekt</h3>
          <CreateProject onAddProject={handleAddProject} />
        </div>
        <div className="projects">
          <Projects projects={projects} onRemoveProject={handleRemoveProject} />
        </div>
      </div>
    </main>
  );
}
