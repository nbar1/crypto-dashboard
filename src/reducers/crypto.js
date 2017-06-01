import * as CryptoActionTypes from '../action-types/crypto';

const initialState = {
	quotes: [],
};

export default function Message(state = initialState, action) {
	switch (action.type) {
		case CryptoActionTypes.UPDATE_QUOTES:
			return {
				...state,
				quotes: action.quotes,
			};

		default:
			return state;
	}
}
