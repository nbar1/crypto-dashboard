import * as CryptoActionTypes from '../action-types/crypto';

const initialState = {
	quotes: [],
	cachedQuotes: [],
};

export default function Message(state = initialState, action) {
	switch (action.type) {
		case CryptoActionTypes.UPDATE_QUOTES:
			return {
				...state,
				cachedQuotes: action.quotes,
			};

		case CryptoActionTypes.ADD_QUOTE:
			return {
				...state,
				quotes: [
					...state.quotes,
					action.quote,
				],
			};

		default:
			return state;
	}
}
