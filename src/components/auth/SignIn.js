import React, { Component } from 'react';

class SignIn extends Component{
    state = {
        email : '',
        password : ''
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
                    <h3>SignIn</h3>
                    <div className="input-field">
                        <label>Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label>Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn">Login</button>
                </form>
            </div>
        )
    }
}

export default SignIn;
