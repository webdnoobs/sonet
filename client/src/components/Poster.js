import React, { Component } from "react";
import { connect } from "react-redux";

class Poster extends Component {
  render() {
    const user = this.props.user || {}
    return (
      <div className="row">
        <div className="col s12">
          <div className="card blue lighten-3">
              <div className="card-content white-text">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="input-field col">
                      <textarea className="col s12"
                        type="text"
                        name="what's on your mind??"
                      />
                      <label htmlFor="what's on your mind??">Post Something</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <button type="submit" className="btn waves-effect waves-light">
                        Post
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Poster);
