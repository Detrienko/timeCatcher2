import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';


const initialState = {
	business: [
		{	
			id: 0,
			title: 'English',
			hours: 1,
			goalHours: 15000,
			description: 'Read something',
			progress: 0
		},
		{
			id: 1,
			title: 'Programming',
			goalHours: 15000,
			hours: 23,
			description: 'PROGRAMMING!!!!',
			progress: 0
		}
	]	
}

const reducer = (state=initialState, action) => {
	switch(action.type){
		case actionTypes.ADD_BUSINESS:

			
			return updateObject(state, action.data)

		default:
		return state; 
	}
}

export default reducer;