import {
  OPEN_MODAL,
  CLOSE_MODAL,
  TOGGLE_MODAL
} from 'redux/types';


export const openModal = () => {
  return {type: OPEN_MODAL}
}


export const closeModal = () => {
  return {type: CLOSE_MODAL}
}


export const toggleModal = () => {
  return {type: TOGGLE_MODAL}
}