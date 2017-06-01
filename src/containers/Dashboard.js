import React, { Component } from 'react';
import Header from '../components/Header';
import QuotesContainer from './QuotesContainer';

class Dashboard extends Component {
	render() {
		return (
			<div className="Dashboard">
				<Header />
				<QuotesContainer {...this.props} />
			</div>
		);
	}
}

export default Dashboard;
