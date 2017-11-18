const initialState = [
	'Story 1',
	'Story 2'
];


export default function stories(state = initialState, action){
	if(action.type === 'ADD_STORY'){
		return [
			...state,
			action.payload
		];
	} else if (action.type === 'DELETE_STORY'){
		return [
			...state,
			action.payload
		];
	}
	return state;
};