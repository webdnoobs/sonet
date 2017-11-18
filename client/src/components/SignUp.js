import React, { Component } from "react";
import { signup_post } from "../actions";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    signup_post(this.state);
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                type="text"
                name="fname"
                value={this.state.fname}
                onChange={this.handleChange}
              />
              <label htmlFor="fname">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                type="text"
                name="lname"
                value={this.state.lname}
                onChange={this.handleChange}
              />
              <label htmlFor="lname">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="email"
                name="email"
                className="validate"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="password"
                name="password"
                className="validate"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <label htmlFor="password">New Password</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button type="submit" className="btn waves-effect waves-light">
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
