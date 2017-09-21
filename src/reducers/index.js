import { combineReducers }  from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import questions  from './questions';
import stories  from './stories';
import filterQuestions  from './filterQuestions';


export default combineReducers({
	routing: routerReducer,
	questions,
	stories,
	filterQuestions
});