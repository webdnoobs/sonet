import React, { Component } from "react";

class Settings extends Component {
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="row">
      <div className="col s12" onSubmit={this.handleSubmit}>
        <div className="card blue lighten-3">
            <div className="card-content white-text">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="input-field col">
                  <input
                    type="password"
                    name="password"
                    className="validate"
                  />
                  <label htmlFor="old password">old password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col">
                  <input
                    type="password"
                    name="password"
                    className="validate"
                  />
                  <label htmlFor="new password">new password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <button type="submit" className="btn waves-effect waves-light">
                      Change Password
                    </button>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Settings;
