import React, { Component } from "react";
import { Link } from "react-router-dom";

class Flag extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "100vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="flow-text col s12 center-align">
              <img
                src="flag.png"
                style={{
                  width: "35px",
                  height: "auto"
                }}>
              </img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Flag;
