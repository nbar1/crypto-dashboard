import * as CryptoActionTypes from '../action-types/crypto';

export const updateQuotes = (quotes) => {
	return {
		type: CryptoActionTypes.UPDATE_QUOTES,
		quotes,
	};
};

export const addQuote = (quote) => {
	return {
		type: CryptoActionTypes.ADD_QUOTE,
		quote,
	};
};
