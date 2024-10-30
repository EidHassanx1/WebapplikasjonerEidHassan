export type ProjectType = {
    id: number;
    title: string;
    description: string;
    status: 'draft' | 'published';
    apublic: 'true' | 'false';
    tags: string[];
    createdAt?: string;
};