// @flow
import React from 'react';
import { ProjectSummary, ProjectDetails } from './style';

type Props = {
    project: Object
};

const ProjectContent = (props: Props) => {
    const { project } = props;

    const renderRepositoryLink = (repo) => {
        if (repo.includes('http://') || repo.includes('https://')) {
            return (
                <a target="_blank" href={repo}>{repo}</a>
            );
        }
        return <span>{repo}</span>;
    };

    return (
        <ProjectDetails>
            <ProjectSummary>
                <div>
                    <strong>Role:</strong><br />
                    <span>{project.role}</span>
                </div>
                <div>
                    <strong>Type:</strong><br />
                    <span>{project.type}</span>
                </div>
            </ProjectSummary>
            <h4>Description:</h4>
            <p>{project.description}</p>
            <h4>Tasks/Features/Achievements:</h4>
            <ul>
                {project.tasks_features.map((entry, i) =>
                    <li key={i}>{entry}</li>)}
            </ul>
            <p><strong>Repository:</strong> {renderRepositoryLink(project.repository)}</p>
        </ProjectDetails>
    );
};

export default ProjectContent;
