import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import postReducer from './store/reducers/post';
import singlePostReducer from './store/reducers/singlePost';
import auth from './store/reducers/auth';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import createPostReducer from './store/reducers/newPost';
import pagination from './store/reducers/pagination';

const rootReducer = combineReducers({
  posts:postReducer,
  singlePost:singlePostReducer,
  auth:auth,
  newPost:createPostReducer,
  pagination:pagination
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>  
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();