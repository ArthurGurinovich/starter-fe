import request from 'request';
import { setCookie } from './spCookie';

export const getUsers = () => dispatch => {
  var options = { method: 'GET',
    url: 'http://localhost:3015/users',
    headers: 
     { 
      'content-type': 'application/json' 
     } 
   };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var list = JSON.parse(body);
    var usersList = [];
    for (var i = list.length - 1; i >= 0; i--) {
      usersList[i] = list[i];
    }

    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: usersList });
  });
  
}


export const loginUser = (username, password) => dispatch => {
  var options = { method: 'POST',
    url: 'http://localhost:4000/api/signin',
    headers: 
     { 'content-type': 'application/json' },
    body: { login: username, password: password },
    json: true };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    let spToken = body;
    setCookie('SP-Token', body, 7)
    dispatch({ type: 'LOGIN_USER_SUCCESS', payload: {SPToken: spToken} });
    currentUser(spToken);
  }); 
}; 

export const currentUser = (Token) => dispatch => {
  var options = { method: 'GET',
    url: 'http://localhost:4000/api/current-user',
    headers: 
     { 'content-type': 'application/json',
       'SP-Token': Token },
    json: true };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    let userData = body;
    dispatch({ type: 'FETCH_USER_SUCCESS', payload: {User: userData} });
  }); 
}

export const registerUser = () => dispatch => {

  var options = { method: 'POST',
    url: 'https://sprint-management.herokuapp.com/api/signup',
    headers: 
     { 'content-type': 'application/json' },
    body: 
     { 
       login: 'ArthurGurinovich',
       password: 'arthur__321',
       email: 'gurinovichag@gmail.com',
       position: 'QA Engineer',
       status: 'Active' 
     },
    json: true };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var list = JSON.parse(body);
    var usersList = [];
    for (var i = list.length - 1; i >= 0; i--) {
      usersList[i] = list[i];
    }

    dispatch({ type: 'REGISTER_USER_SUCCESS', payload: usersList });
  }); 
}