import { CHANGE_AUTH } from 'actions/types';

export default function(state = false, action) {
  // false, the user is not logged in => by default
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
}
