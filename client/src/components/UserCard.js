import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    axios
      .post("/api/add_friend", {
        _id: this.props.user._id
      })
      .then(res => {
        console.log(res);
        window.Materialize.toast("Friend Added", 4000);
      });
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-image">
              <img
                src="https://media1.giphy.com/media/aw9WgvgNd1bQk/200_s.gif"
                alt="Profile Pic"
              />
              <span className="card-title">Card Title</span>
              <a
                className="btn-floating halfway-fab waves-effect waves-light red"
                onClick={this.handleClick}
              >
                <i className="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <p>{this.props.user.fname}</p>
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
