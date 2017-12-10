import React, { Component } from "react";
import { connect } from "react-redux";

class NewsFeed extends Component {
  
  render() {
    const user = this.props.user || {}
    return (
        <div className="row">
            <div className="col">
                <div className="card blue lighten-3">
                    <div className="card-content white-text">
                    <span className="card-title">Card Title</span>
                        <p>idhar udhar ki baaten wagarah wagarah!! idhar udhar ki baaten wagarah wagarah!! </p>
                    </div>
                    <div className="card-action">
                        <a className="btn-floating red"><i className="material-icons">insert_chart</i></a>
                        <span> </span>
                        <a className="btn-floating red"><i className="material-icons">favorite_border</i></a>
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

export default connect(mapStateToProps)(NewsFeed);
