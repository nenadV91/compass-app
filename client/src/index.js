import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-table/react-table.css'
import 'assets/css/style.css';
import reduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import App from 'components/App';
import theme from 'assets/jss/theme';


// Create redux store
const store = createStore(
  reducers, {}, 
  applyMiddleware(reduxThunk)
);


// Set Redux Provider, Router and Theme provider
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
