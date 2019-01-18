import {
  PERSON_SELECT,
  PERSON_UNSELECT
} from 'redux/types';


const initial = null;


export default (state = initial, action) => {
  switch(action.type) {
    case PERSON_SELECT:
      return action.payload;


    case PERSON_UNSELECT:
      return null;


    default:
      return state
  }
}