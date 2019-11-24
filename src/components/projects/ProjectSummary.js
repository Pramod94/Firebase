import React from 'react';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card project-summary">
            <div className="card-content">
                <span className="card-title">{project.title}</span>
                <p>Posted by : Pramod</p>
                <p className="grey-text">23-Nov-2019</p>
            </div>
        </div>
    )
}

export default ProjectSummary;
