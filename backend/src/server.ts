import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { Project } from './type';

const app = express();

app.use(cors({
  origin: 'http://localhost:3001'
}));

app.use(express.json());

const projectsFilePath = path.join(__dirname, 'projects.json');

const readProjectsFromFile = (): Project[] => {
    try {
        const data = fs.readFileSync(projectsFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading projects file:', error);
        return [];
    }
};

const writeProjectsToFile = (projects: Project[]) => {
    try {
        fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
    } catch (error) {
        console.error('Error writing projects file:', error);
    }
};

app.get('/projects', (req, res) => {
    const projects = readProjectsFromFile();
    res.json(projects);
});

app.post('/projects', (req, res) => {
    const { title, description, category } = req.body;

    if (!title || !description) {
        res.status(400).json({ error: 'Title and description are required' });
        return;
    }

    const projects = readProjectsFromFile();

    const newProject: Project = {
        id: projects.length + 1,
        title,
        description,
        category: category || '',
        createdAt: new Date().toISOString(),
    };

    projects.push(newProject);
    writeProjectsToFile(projects);
    res.status(201).json(newProject);
});

app.delete('/projects/:id', (req: any, res: any) => {
    const id = parseInt(req.params.id, 10);
    console.log(`Received delete request for project with id: ${id}`);
    const projects = readProjectsFromFile();
    console.log('Current projects:', projects);
    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex === -1) {
        console.log(`Project with id ${id} not found`);
        return res.status(404).json({ error: 'Project not found' });
    }

    projects.splice(projectIndex, 1);

    writeProjectsToFile(projects);

    res.status(200).json({ message: 'Project deleted successfully' });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
