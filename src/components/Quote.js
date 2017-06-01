import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Quote.css';

class Quote extends Component {
	render() {
		const quote = this.props.quote;

		return (
			<div className="Quote">
				<div className="name">{quote.name}</div>
				<div className="price-usd">{quote.price_usd}</div>
			</div>
		);
	}
}

Quote.propTypes = {
	quote: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired,
};

export default Quote;
