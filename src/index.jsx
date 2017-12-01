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

// internal modules: components
import Home from './components/home';
// internal modules: containers
import CategoryList from './containers/category_list';
// internal modules: reducers
import categoriesReducer from './reducers/categories_reducer';
import selectedCategoryReducer from './reducers/selected_category_reducer';
import videosReducer from './reducers/videos_reducer';
import selectedVideoReducer from './reducers/selected_video_reducer';
// internal modules: assets
import '../assets/stylesheets/application.scss';

// logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions
const middlewares = applyMiddleware(reduxPromise, logger);

// We declare the initial state if needed, if so, we then give it to the store
const initialState = {
  categories: ["Top14", "Super15", "Aviva Premiership"],
  selectedCategory: "Top14",
  videos: [],
  selectedVideo: {}
};

// We declare the reducers
const reducers = combineReducers({
  categories: categoriesReducer,
  selectedCategory: selectedCategoryReducer,
  videos: videosReducer,
  selectedVideo: selectedVideoReducer
});

// We create the store
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <div className="main-react">
      <div className="header">
        <h1 className="yourrugby-title">YouRRugby</h1>
        <div className="menu-container">
          <CategoryList/>
        </div>
      </div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  </Provider>,
  document.querySelector('.container')
);
