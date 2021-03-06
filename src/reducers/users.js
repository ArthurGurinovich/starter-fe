const initialState = [];


export default function users(state = initialState, action){
	if(action.type === 'ADD_USER'){
		return [
			...state,
			action.payload
		];
	} else if (action.type === 'FETCH_USERS_SUCCESS'){
		return action.payload;
	} else if (action.type === 'FETCH_USER_SUCCESS'){
		return action.payload;
	} else if (action.type === 'REGISTER_USER_SUCCESS'){
		return [
			...state,
			action.payload
		];
	} else if (action.type === 'LOGIN_USER_SUCCESS'){
		return [
			...state,
			action.payload
		];
	} else if (action.type === 'LOGOUT_USER_SUCCESS'){
		return action.payload;
	}
	return state;
};