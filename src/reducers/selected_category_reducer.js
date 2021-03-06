import { SELECTED_CATEGORY } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case SELECTED_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
