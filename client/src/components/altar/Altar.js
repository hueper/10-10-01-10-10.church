import React, { Component } from "react";

class Altar extends Component {
  render() {
    return (
      <div>
        <audio id="audio" controls>
          <source src="http://10-10-01-10-10.church:8000/stream" type="audio/mpeg">
          </source>
        </audio>
      </div>
    );
  }
}

export default Altar;
