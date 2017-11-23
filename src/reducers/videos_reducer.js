import { SET_VIDEOS } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case SET_VIDEOS:
      return action.payload;
    default:
      return state;
  }
}
