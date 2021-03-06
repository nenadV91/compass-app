import {
  PERSON_GET_ALL_REQUESTED,
  PERSON_GET_ALL_SUCCEEDED,
  PERSON_GET_ALL_FAILED,
  PERSON_ADD_REQUESTED,
  PERSON_ADD_SUCCEEDED,
  PERSON_ADD_FAILED,
  PERSON_UPDATE_REQUESTED,
  PERSON_UPDATE_SUCCEEDED,
  PERSON_UPDATE_FAILED
} from 'redux/types';


const initial = {
  initial: true,
  create: false
}


export default (state = initial, action) => {
  switch(action.type) {
    case PERSON_GET_ALL_REQUESTED:
      return {
        ...state,
        initial: true
      }


    case PERSON_GET_ALL_SUCCEEDED: 
      return {
        ...state,
        initial: false
      }
    

    case PERSON_GET_ALL_FAILED:
      return {
        ...state,
        initial: false
      }
  
    case PERSON_ADD_REQUESTED:
      return {
        ...state,
        create: true
      }


    case PERSON_ADD_SUCCEEDED: 
      return {
        ...state,
        create: false
      }
    

    case PERSON_ADD_FAILED:
      return {
        ...state,
        create: false
      }

    case PERSON_UPDATE_REQUESTED:
      return {
        ...state,
        update: true
      }


    case PERSON_UPDATE_SUCCEEDED: 
      return {
        ...state,
        update: false
      }
    

    case PERSON_UPDATE_FAILED:
      return {
        ...state,
        update: false
      }

    default:
      return state
  }
}