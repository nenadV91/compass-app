import {
  OPEN_MODAL,
  CLOSE_MODAL,
  TOGGLE_MODAL
} from 'redux/types';

const initial = false

export default (state = initial, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return true;

    case CLOSE_MODAL:
      return false;

    case TOGGLE_MODAL:
      return !state;

    default:
      return state
  }
}