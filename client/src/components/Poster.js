import React, { Component } from "react";
import { connect } from "react-redux";

class Poster extends Component {
  render() {
    const user = this.props.user || {}
    return (
      <div className="fixed-action-btn horizontal">
        <a className="btn-floating btn-large red" href="#modal1"></a>
        <div id="modal1" class="modal">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
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
