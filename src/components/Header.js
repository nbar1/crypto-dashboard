import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddQuote from './AddQuote';

import './Header.css';

/**
 * Header
 *
 * @class
 */
class Header extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<div className="Header">
				<div className="title">Crypto Dashboard</div>
				<AddQuote addQuote={this.props.actions.addQuote} cachedQuotes={this.props.cachedQuotes} />
			</div>
		);
	}
}

Header.propTypes = {
	actions: PropTypes.object.isRequired,
	cachedQuotes: PropTypes.array.isRequired,
};

export default Header;
