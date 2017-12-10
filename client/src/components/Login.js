import React, { Component } from "react";
import axios from "axios";

const login_post = function(data) {
  axios
    .post("/auth/login", data)
    .then(res => {
      window.location.assign("/");
    })
    .catch(err => {
      if (err.response.status === 401) {
        window.location.assign("/");
      }
    });
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    login_post(this.state);
  }
  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
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
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <button type="submit" className="btn waves-effect waves-light">
                Login
              </button>
            </div>
            <div className="col s6">
              <a href="/auth/google" className="btn waves-effect waves-light">
                Login with Google
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
