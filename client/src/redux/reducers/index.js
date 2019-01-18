import {combineReducers} from 'redux';
import personsReducer from './personsReducer';
import modalReducer from './modalReducer';
import loadersReducer from './loadersReducer';
import selectedReducer from './selectedReducer';


export default combineReducers({
  persons: personsReducer,
  loaders: loadersReducer,
  modal: modalReducer,
  selected: selectedReducer
});