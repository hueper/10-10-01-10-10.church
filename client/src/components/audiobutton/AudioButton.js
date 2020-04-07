import React, { Component } from 'react';
import Play from './Play.js';
import Pause from './Pause.js';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleStream } from "../../actions/authActions";

const mapDispatchToProps = dispatch => {
  return {
    playing: playing => dispatch(toggleStream(playing))
  };
};
const mapStateToProps = state => {
  return {
    playing: state.playing
  };
};

class ConnectedAudioButton extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playing: true
    }
  }

  handlePlayerClick = () => {
    if (!this.state.playing) {
      this.setState({playing: true})
    } else {
      this.setState({playing: false})
    }
    this.props.playing(this.state.playing);
  }

  render() {
    return (
      <div className="audiobutton" >
        {this.state.playing ? <Play onPlayerClick={this.handlePlayerClick} /> : <Pause onPlayerClick={this.handlePlayerClick} />}
      </div>
    )
  }
}

ConnectedAudioButton.propTypes = {
  playing: PropTypes.func.isRequired
};

const AudioButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedAudioButton);

export default AudioButton;
