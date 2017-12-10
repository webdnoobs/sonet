import React, { Component } from "react";
import { connect } from "react-redux";

class UserCard extends Component {
  render() {
    return (
        <div className="s4">
            <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-image">
                        <img src="https://media1.giphy.com/media/aw9WgvgNd1bQk/200_s.gif" alt="Profile Pic"/>
                        <span className="card-title">Card Title</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                        <p>{this.props.user.fname}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(UserCard);
