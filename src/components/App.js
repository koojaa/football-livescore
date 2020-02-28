import React, { Component } from 'react';
import MatchTemplate from './MatchTemplate/MatchTemplate';
import MatchFinder from './MatchFinder';
import dateFormatter from '../utils/dateFormatter';

class App extends Component {
	state = {
		range: {
			startDate: null,
			endDate: null
		}
	};

	handleRange = range => {
		const startDate = dateFormatter(range[0]);
		const endDate = dateFormatter(range[1]);

		this.setState({
			range: {
				startDate,
				endDate
			}
		});
	};

	render() {
		return (
			<div>
				<MatchTemplate header={<MatchFinder setRange={this.handleRange} />} />
			</div>
		);
	}
}

export default App;
