import React from 'react';
import PropTypes from 'prop-types';

import './PercentChanged.css';

/**
 * PercentChanged
 *
 * @param {object} props
 * @returns {jsx}
 */
const PercentChanged = props => {
	const changePercent = (props.change) ? props.change : '0';
	const negativeChange = changePercent.match(/^-/g);

	return (
		<div className="PercentChanged">
			<div className="timeframe">{props.timeframe}</div>
			<div className={(negativeChange) ? 'percent-negative' : 'percent-positive'}>{changePercent}</div>
		</div>
	);
};

PercentChanged.propTypes = {
	change: PropTypes.string,
	timeframe: PropTypes.string.isRequired,
};

export default PercentChanged;
