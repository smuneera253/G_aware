// import { createStore, applyMiddleware, combineReducers ,compose} from "redux";
// import leaderReducer from "./ProductRedux/reducer"
// import budgetRducer from './ProductRedux/reducer'
// import thunk from "redux-thunk";

// const rootReducer = combineReducers({ leader: leaderReducer ,budget : budgetRducer});

// const composeEmhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// ); 


import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import leaderReducer from "./ProductRedux/reducer";  // Adjusted import
import budgetReducer from './ProductRedux/reducer';  // Adjusted import
import plansReducer from './ProductRedux/reducer';

import thunk from "redux-thunk";

const rootReducer = combineReducers({ leader: leaderReducer, budget: budgetReducer ,plans:plansReducer}); // Renamed budgetRducer to budgetReducer

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
