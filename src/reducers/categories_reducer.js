export default function(state = null, action) {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return action.payload;
    default:
      return state;
  }
}
