import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Dashboard from './containers/Dashboard';

import * as CryptoActions from './actions/crypto';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Dashboard {...this.props} />
			</div>
		);
	}
}

App.propTypes = {
	actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => (
	{
		...state,
	}
);

const mapDispatchToProps = dispatch => (
	{
		actions: bindActionCreators(CryptoActions, dispatch),
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
