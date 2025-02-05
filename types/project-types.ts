export interface Project {
    id: number; // Unique identifier for the project
    name: string; // Name of the project
    description: string; // Brief description of the project
    tools: string[]; // List of tools and technologies used in the project
    role: string, // Role played in the project (e.g., Backend Developer, Full Stack Developer)
    code: string, // Link to the source code repository (if available)
    demo: string, // Link to the live demo or deployed app (if available)
    image: string, // URL or path to the project's image
};
