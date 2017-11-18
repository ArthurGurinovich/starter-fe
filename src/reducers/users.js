const initialState = [];


export default function users(state = initialState, action){
	if(action.type === 'ADD_USER'){
		return [
			...state,
			action.payload
		];
	} else if (action.type === 'FETCH_USERS_SUCCESS'){
		return action.payload;
	}
	return state;
};