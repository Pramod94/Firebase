import React from 'react';

const ProjectDetails = (props) => {
	console.log("From ProjectDetails component - default props value", props);
	let id = props.match.params.id;
	return (
		<div className="container">
			<div className="card">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>Complete details about project</p>
				</div>
				<div className="card-action grey-text">
					<div>Posted by Pramod</div>
					<div>23-Nov-2019</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetails;
