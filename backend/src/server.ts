import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

type Project = {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    category: string;
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'Prosjekt A',
      description: 'Dette er beskrivelsen av Prosjekt A',
      createdAt: new Date(),
      category: 'Webutvikling',
    },
    {
      id: 2,
      title: 'Prosjekt B',
      description: 'Dette er beskrivelsen av Prosjekt B',
      createdAt: new Date(),
      category: 'Design',
    },
    {
      id: 3,
      title: 'Prosjekt C',
      description: 'Dette er beskrivelsen av Prosjekt C',
      createdAt: new Date(),
      category: 'Apputvikling',
    },
  ];

  app.get('/projects', (req: Request, res: Response) => {
    res.json(projects);
  });

  const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveren kjører på port ${PORT}`);
});