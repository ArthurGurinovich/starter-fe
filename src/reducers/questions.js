const initialState = [];


export default function questions(state = initialState, action){
	if(action.type === 'ADD_QUESTION'){
		return [
			...state,
			action.payload
		];
	} else if (action.type === 'FETCH_QUESTIONS_SUCCESS'){
		return action.payload;
	}
	return state;
};