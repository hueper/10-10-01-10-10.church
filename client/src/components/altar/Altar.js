import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { playStream } from "../../actions/authActions";
import AudioButton from '../audiobutton/AudioButton';

const mapStateToProps = state => {
  return {
    playing: state.playing
  };
};

class ConnectedAltar extends Component {
  constructor(props){
    super(props);
    this.state = {
      playing: false
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      playing: nextProps.playing
    });
    if (nextProps.playing.playing) {
      this.audioRef.play();
    } else {
      this.audioRef.pause();
    }
  }

  render() {
    return (
      <div>
        <AudioButton/>
        <audio id="audio" ref={(audio) => {this.audioRef = audio}}>
          <source src="http://10-10-01-10-10.church:8000/stream" type="audio/mpeg">
          </source>
        </audio>
      </div>
    );
  }
}

ConnectedAltar.propTypes = {
  playing: PropTypes.object.isRequired
};

const Altar = connect(
  mapStateToProps
)(ConnectedAltar);

export default Altar;
