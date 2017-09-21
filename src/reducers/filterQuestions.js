const initialState = '';


export default function questions(state = initialState, action){
	if(action.type === 'FIND_QUESTION'){
		return action.payload;
	}
	return state;
};