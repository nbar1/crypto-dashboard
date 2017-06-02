import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Quote from '../components/Quote';

import './QuotesContainer.css';

/**
 * QuotesContainer
 *
 * @class
 */
class QuotesContainer extends Component {
	/**
	 * updateQuotes
	 *
	 * @returns {void}
	 */
	updateQuotes() {
		fetch('https://api.coinmarketcap.com/v1/ticker/')
			.then(response => response.json())
			.then(response => {
				this.props.actions.updateQuotes(response);
			});
	}

	/**
	 * componentWillMount
	 *
	 * @returns {void}
	 */
	componentWillMount() {
		this.updateQuotes();
	}

	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		const actions = this.props.actions;

		const quoteComponents = this.props.quotes.map((quote, index) => (
			<Quote
				key={quote.id}
				quote={quote}
				index={index}
				actions={actions}
			/>
		));

		return (
			<div className="QuotesContainer">
				{quoteComponents}
			</div>
		);
	}
}

QuotesContainer.propTypes = {
	quotes: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

export default QuotesContainer;
