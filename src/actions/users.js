var request = require("request");

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