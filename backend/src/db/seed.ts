import db from './db';

export const seedProjects = () => {
    const insertProject = db.prepare(`
        INSERT INTO projects (title, description, status, apublic, tags)
        VALUES (@title, @description, @status, @apublic, @tags)
    `);

    const projects = [
        { title: 'Prosjekt 1', description: 'Beskrivelse 1', status: 'draft', apublic: true, tags: 'tag1,tag2' },
        { title: 'Prosjekt 2', description: 'Beskrivelse 2', status: 'published', apublic: false, tags: 'tag3' }
    ];

    projects.forEach((project) => insertProject.run(project));
};

seedProjects();
