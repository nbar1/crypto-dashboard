import React, { Component } from 'react';
import Header from '../components/Header';
import QuotesContainer from './QuotesContainer';

/**
 * Dashboard
 *
 * @class
 */
class Dashboard extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<div className="Dashboard">
				<Header {...this.props} />
				<QuotesContainer {...this.props} />
			</div>
		);
	}
}

export default Dashboard;
