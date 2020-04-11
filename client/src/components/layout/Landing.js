import React, { Component } from "react";
import { Link } from "react-router-dom";
import Kneeler from "../layout/Kneeler";

class Landing extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "80vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="flow-text col s12 center-align">
              <h4 style={{letterSpacing:'0.5rem'}}>
                10-10-01-10-10
              </h4>
              <p className="flow-text grey-text text-darken-1">
                Streaming churchy.
              </p>
              <br />
              <div className="col s6">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable grey accent-3"
                >
                  Convert
                </Link>
              </div>
              <div className="col s6">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect hoverable churchy-yellow grey-text text-darken-3"
                >
                  Pray
                </Link>
              </div>
              <div className="col s12">
                <p className="flow-text grey-text text-darken-1">
                  <Link
                    to="/see"
                    style={{
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      fontSize: "1rem"
                    }}
                    className="flow-text black-text"
                  >
                    ?
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Kneeler/>
      </div>
    );
  }
}

export default Landing;
