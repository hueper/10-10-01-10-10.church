import {TOGGLE_STREAM } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  playing: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_STREAM:
      return {
        ...state,
        playing: action.playing
      };
    default:
      return state;
  }
}
