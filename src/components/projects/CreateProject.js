import React, { Component } from 'react';

class CreateProject extends Component{
    state = {
       title : '',
       content : ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => {
        let value = e.target.value;
        this.setState({
            [e.target.id] : value
        })
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h3>Create New Project</h3>
                    <div className="input-field">
                        <label>Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label>Project Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn">Create Project</button>
                </form>
            </div>
        )
    }
}

export default CreateProject;
