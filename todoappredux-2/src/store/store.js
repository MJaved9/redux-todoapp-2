import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import { countReducer } from '../counter/counterReducer';
import { todoReducer } from '../todos/todoReducer';
import thunk from 'redux-thunk'
const rootReducer=combineReducers(
{
    count:countReducer,
    todo:todoReducer
});
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


 export const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

