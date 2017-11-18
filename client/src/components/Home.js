import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <a href="/api/logout" className="btn waves-effect waves-light">
          Logout
        </a>
        <h1>Hello {this.props.auth ? this.props.auth.fname : ""}!</h1>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Home);
