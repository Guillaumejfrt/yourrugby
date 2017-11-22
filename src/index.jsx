// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// external-modules: To navigate in the app in the browser
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
// external-modules: We add 'applyMiddleware' when we use middleware like logger:
import { createStore, combineReducers, applyMiddleware } from 'redux';

// middleware: To get the result of API fetch:
import reduxPromise from 'redux-promise';

// middleware: To display the action payload in the brower console:
import logger from 'redux-logger';


// To use forms:
// import { reducer as formReducer } from 'redux-form';

// internal modules
import Home from './components/home';
import categoriesReducer from './reducers/categories_reducer';
import selectedCategoryReducer from './reducers/selected_category_reducer';
import videosReducer from './reducers/videos_reducer';
import '../assets/stylesheets/application.scss';

// logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions
const middlewares = applyMiddleware(reduxPromise, logger);

// We declare the initial state if needed, if so, we then give it to the store
const initialState = {
  categories: ["Top14", "Super15", "Aviva Premiership"]
  selectCategory: "Top14"
};

// We declare the reducers
const reducers = combineReducers({
  categories: categoriesReducer,
  selectedCategory: selectedCategoryReducer,
  videos: videosReducer
});

// We create the store
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
