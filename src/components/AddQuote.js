import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddQuote.css';

/**
 * AddQuote
 *
 * @class
 */
class AddQuote extends Component {
	/**
	 * constructor
	 *
	 * @constructor
	 */
	constructor() {
		super();

		this.state = {
			quoteText: '',
		};
	}

	/**
	 * onMessageChange
	 *
	 * @param {event} e
	 * @returns {void}
	 */
	onQuoteChange(e) {
		this.setState({
			quoteText: e.target.value,
		});
	}

	/**
	 * addQuote
	 *
	 * @returns {void}
	 */
	addQuote() {
		if (this.state.quoteText === '') return;

		let quote = this.props.cachedQuotes.filter(v => {
			return v.symbol.toLowerCase() === this.state.quoteText.toLowerCase();
		});

		if (quote.length === 0) return;

		this.props.addQuote(quote[0]);

		this.setState({
			quoteText: '',
		});
	}

	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<div className="AddQuote">
				<form
					onSubmit={function(e) {
						e.preventDefault();
						this.addQuote();
					}.bind(this)}
				>
					<input
						type="text"
						placeholder="Symbol"
						value={this.state.quoteText}
						onChange={function(e) {
							this.onQuoteChange(e);
						}.bind(this)}
					/>
					<div
						className="send-button"
						onClick={function() {
							this.addQuote();
						}.bind(this)}
					>Add</div>
				</form>
			</div>
		);
	}
}

AddQuote.propTypes = {
	addQuote: PropTypes.func.isRequired,
	cachedQuotes: PropTypes.array.isRequired,
};

export default AddQuote;
