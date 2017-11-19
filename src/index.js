import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import Question from './Question';
import Users from './Users';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Forgot from './components/Forgot';

import reducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(
	reducer, 
	composeWithDevTools(applyMiddleware(thunk)),
	applyMiddleware(middleware)
);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
		<Switch>
			<Route exact path="/" component={App} />
		    <Route path="/question/:id" component={Question} />
			<Route path="/user/:id" component={Users} />
			<Route path="/signin" component={SignIn} />
			<Route path="/signup" component={SignUp} />
			<Route path="/forgot" component={Forgot} />
		</Switch>	
		</ConnectedRouter>
	</Provider>, 
	document.getElementById('root')
);




// import { createStore } from 'redux';

// function questions(state = [], action){
// 	if(action.type === 'ADD_QUESTION'){
// 		return [
// 			...state,
// 			action.payload
// 		];
// 	}
// 	return state;
// }

// const store = createStore(questions);
// const questionList = document.querySelectorAll('.questionList')[0];
// const questionInput = document.querySelectorAll('.questionInput')[0];
// const addQuestionBtn = document.querySelectorAll('.addQuestion')[0];


// store.subscribe( () => {	
// 	questionList.innerHTML = '';
// 	questionInput.value = '';
// 	store.getState().forEach(question => {
// 		if(question !== ''){
// 			const li = document.createElement('li');
// 			li.textContent = question;
// 			questionList.appendChild(li);
// 		}else{
// 			console.log('Input value is wrong: ', question );
// 		}
// 	});
// })
// addQuestionBtn.addEventListener('click', () => {
// 	const questionName = questionInput.value;
// 	store.dispatch({
// 		type: 'ADD_QUESTION',
// 		payload: questionName
// 	});
// });