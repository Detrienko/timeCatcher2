import * as actionTypes from './actionsTypes';

export const addBusiness = (data) => {
	return {
		type: actionTypes.ADD_BUSINESS,
		data: data
	}
}