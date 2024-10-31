import { useEffect, useState } from 'react';
import { ProjectType } from './Types';
import CreateProject from './CreateProject';
import Projects from './Projects';
import { projectSchema } from '../helpers/validation';

export default function Page() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleAddProject = (newProject: ProjectType) => {
    console.log("Starting project validation...");

    const validation = projectSchema.safeParse(newProject);

    if (!validation.success) {
      console.log("Validation failed:", validation.error.errors);
      setError(
        "Validation error: " +
          validation.error.errors.map((e) => e.message).join(", ")
      );
      return;
    }

    console.log("Validation successful. Project data is valid:", validation.data);

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(validation.data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error creating project');
        }
        return response.json();
      })
      .then(data => {
        if (data && data.id) {
          const project = {
            id: data.id,
            title: data.title,
            description: data.description,
            status: data.status,
            apublic: data.apublic,
            tags: data.tags,
            createdAt: data.createdAt,
          };
          setProjects([...projects, project]);
          setError(null);
        } else {
          console.error("Unexpected response structure from backend:", data);
          setError("Unexpected response from server.");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setError("Error while creating project. Please check the server logs.");
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
        setError("Error while deleting project.");
      });
  };

  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching projects');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
      })
      .catch(error => {
        console.error('Error:', error);
        setError("Error while fetching projects.");
      });
  }, []);

  return (
    <main>
      <div className="container">
        <h1>Administration Page</h1>
        <div className="input-section">
          <h3>Add New Project</h3>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <CreateProject onAddProject={handleAddProject} />
        </div>
        <div className="projects">
          <Projects projects={projects} onRemoveProject={handleRemoveProject} />
        </div>
      </div>
    </main>
  );
}
