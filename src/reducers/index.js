import { combineReducers }  from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import questions  from './questions';
import users  from './users';
import filterQuestions  from './filterQuestions';


export default combineReducers({
	routing: routerReducer,
	questions,
	users,
	filterQuestions
});