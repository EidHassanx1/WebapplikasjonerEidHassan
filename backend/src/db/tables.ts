import db from './db';

export const createProjectsTable = () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            status TEXT CHECK(status IN ('draft', 'published')) NOT NULL DEFAULT 'draft',
            apublic BOOLEAN NOT NULL DEFAULT 1,
            tags TEXT,
            createdAt TEXT DEFAULT CURRENT_TIMESTAMP
        )
    `;
    db.prepare(createTableQuery).run();
};

createProjectsTable();