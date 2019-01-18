import {
  PERSON_GET_ALL_SUCCEEDED,
  PERSON_ADD_SUCCEEDED,
  PERSON_UPDATE_SUCCEEDED,
  PERSON_REMOVE,
} from 'redux/types';

const initial = []

export default (state = initial, action) => {
  switch(action.type) {
    case PERSON_GET_ALL_SUCCEEDED:
      return action.payload;


    case PERSON_REMOVE:
      return state.filter(({id}) => {
        return id !== action.payload
      })


    case PERSON_ADD_SUCCEEDED:
      return [
        action.payload, 
        ...state
      ]


    case PERSON_UPDATE_SUCCEEDED:
      return state.map(client => {
        if(client.id === action.payload.id) return action.payload;
        else return client
      })


    default:
      return state
  }
}