import * as CryptoActionTypes from '../action-types/crypto';

export const updateQuotes = (quotes) => {
	return {
		type: CryptoActionTypes.UPDATE_QUOTES,
		quotes,
	};
};
