import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PercentChanged from './PercentChanged';

import './Quote.css';

/**
 * Quote
 *
 * @class
 */
class Quote extends Component {
	/**
	 * constructor
	 *
	 * @constructor
	 * @param {object} props
	 */
	constructor(props) {
		super();

		this.state = this.props;
	}

	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		const quote = this.props.quote;
		const changePercent1h = (quote.percent_change_1h) ? quote.percent_change_1h : '0';

		const priceClass = classNames({
			'price-usd': true,
			'is-negative': changePercent1h.match(/^-/g),
		});

		return (
			<div className="Quote">
				<div className="name">{quote.name}</div>
				<div className={priceClass}>{quote.price_usd}</div>

				<div className="percent-changed-container">
					<PercentChanged change={quote.percent_change_1h} timeframe="1h" />
					<PercentChanged change={quote.percent_change_24h} timeframe="24h" />
					<PercentChanged change={quote.percent_change_7d} timeframe="7d" />
				</div>
			</div>
		);
	}
}

Quote.propTypes = {
	quote: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired,
};

export default Quote;
