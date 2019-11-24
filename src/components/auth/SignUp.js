import React, { Component } from 'react';

class SignUp extends Component{
    state = {
        email : '',
        password : '',
        firstname : '',
        lastname : ''
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
                    <h3>SignUp</h3>
                    <div className="input-field">
                        <label>FirstName</label>
                        <input type="text" id="firstname" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label>LastName</label>
                        <input type="text" id="lastname" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label>Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label>Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn">SignUp</button>
                </form>
            </div>
        )
    }
}

export default SignUp;
