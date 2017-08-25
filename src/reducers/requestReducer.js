// 
//Reducer Accept teh belwo parameters and updates the state
//1. action (info about what happened)
//2. Copy of current state
// Each state should have individual reducer
// State should be changed only in reducer, all states should be changed immutably 
function requests(state = { }, action){
	switch (action.type) {
		case 'REQUEST_LOADING':
			return {...state, isLoading: true}
		case 'REQUEST_ERROR':	 
			return {...state, isError: true, errorMessage: action.errorMessage }
		case 'REQUEST_SUCCESS':
		    return {isError: false, isLoading: false }
		default:
			return {isError: false, isLoading: false }
	}
}

export default requests;