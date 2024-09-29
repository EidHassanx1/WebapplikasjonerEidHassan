import { useState, useEffect } from 'react';
import CreateProject from './components/CreateProject';
import Projects from './components/Projects';
import { ProjectType } from './components/Types';
import Grid from './components/Grid';

  // const project = [
  //   {title: "TITTEL"}
  // ];

  // const experience = [
  //   { name: "Figma UI for customer X" },
	//   { name: "Website for customer Y" },
  // ];
  // const student {
  //   name: "Halgeir Geirson",
  //   degree: "Bachelor IT",
  //   points: 180,
  //   email: "student@hiof.no",
  //   experiences: [
	// 	  { name: "Figma UI for customer X" },
	// 	  { name: "Website for customer Y" }
	//   ]
  // }

function App() {

  const [projects, setProjects] = useState<ProjectType[]>([]);
  const handleAddProject = (newProject: ProjectType) => {
    setProjects([...projects, newProject]);
  };
  const handleRemoveProject = (index: number) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
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
    <>
	  <main>
      <h1>Administrasjonsside</h1>
      <div className="container">
        <div className="input-section">
          <h3>Legg til student</h3>
          <Grid students={[]} />
        </div>
        
        <div className="input-section">
          <h3>Legg til prosjekt</h3>
          <CreateProject onAddProject={handleAddProject} />
          <Projects projects={projects} onRemoveProject={handleRemoveProject} />
        </div>
      </div>
    </main>
    </>
  )
};

export default App;