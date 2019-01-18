import {combineReducers} from 'redux';
import personsReducer from './personsReducer';
import dialogReducer from './dialogReducer';
import loadersReducer from './loadersReducer';


export default combineReducers({
  persons: personsReducer,
  dialog: dialogReducer,
  loaders: loadersReducer,
});