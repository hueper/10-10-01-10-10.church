import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class See extends Component {
  render() {
    return (
      <div className="container">
        <div
        style={{
          marginTop: "4rem",
          textAlign: "center"
        }}
        className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <p className="grey-text text-darken-1">
                Der Oberbischoff von 10-10-01-10-10.church ist Moritz Hüper.
              </p>
              <p className="grey-text text-darken-1">
                Emails an den Oberbischoff bitte an: hueper@uni-hildesheim.de
              </p>
            </div>
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> OK
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default See;
