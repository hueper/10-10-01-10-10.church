import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Altar from "../altar/Altar";

class Nave extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "80vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Bless You,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                The next service will take place on Sunday, April 12 at 2 pm.
              </p>
            </h4>
            <Altar />
            <button
              style={{
                width: "180px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect grey lighten-4 accent-3 grey-text text-darken-1"
            >
              End Service.
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Nave.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Nave);
