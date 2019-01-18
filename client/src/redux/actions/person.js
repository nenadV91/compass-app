import {
  PERSON_GET_ALL_REQUESTED,
  PERSON_GET_ALL_SUCCEEDED,
  PERSON_GET_ALL_FAILED,
  PERSON_ADD_REQUESTED,
  PERSON_ADD_SUCCEEDED,
  PERSON_ADD_FAILED,
  PERSON_UPDATE_REQUESTED,
  PERSON_UPDATE_SUCCEEDED,
  PERSON_UPDATE_FAILED,
  PERSON_REMOVE,
  PERSON_SELECT,
  PERSON_UNSELECT
} from 'redux/types';
import axios from 'axios';


export const getAllPersons = () => {
  return async dispatch => {
    dispatch({type: PERSON_GET_ALL_REQUESTED})

    try {
      const res = await axios.get('/person');
      dispatch({type: PERSON_GET_ALL_SUCCEEDED, payload: res.data})
    } catch(error) {
      dispatch({type: PERSON_GET_ALL_FAILED})
      throw new Error(error.response.data.message)
    }
  }
}


export const addPerson = (data) => {
  return async dispatch => {
    dispatch({type: PERSON_ADD_REQUESTED})

    try {
      const res = await axios.post('/person', data);
      dispatch({type: PERSON_ADD_SUCCEEDED, payload: res.data})
      return res.data;
    } catch(error) {
      dispatch({type: PERSON_ADD_FAILED});
      throw new Error(error.response.data.message)
    }
  }
}


export const updatePerson = ({id, data}) => {
  return async dispatch => {
    dispatch({type: PERSON_UPDATE_REQUESTED})

    try {
      const res = await axios.patch(`/person/${id}`, data);
      dispatch({type: PERSON_UPDATE_SUCCEEDED, payload: res.data})
      return res.data;
    } catch(error) {
      dispatch({type: PERSON_UPDATE_FAILED});
      throw new Error(error.response.data.message)
    }
  }
}


export const removePerson = (id) => {
  return async dispatch => {
    await axios.delete(`/person/${id}`);
    dispatch({type: PERSON_REMOVE, payload: id})
  }
}


export const selectPerson = (data) => {
  return {type: PERSON_SELECT, payload: data}
}


export const unselectPerson = () => {
  return {type: PERSON_UNSELECT}
}