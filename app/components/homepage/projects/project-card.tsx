import { Project } from '@/types/project-types';
import React from 'react';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div>
            <p>{ project.image }</p>
        </div>
    );
};

export default ProjectCard;