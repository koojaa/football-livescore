import React, { Component } from 'react';
import MatchTemplate from './MatchTemplate/MatchTemplate';
import MatchFinder from './MatchFinder';
import dateFormatter from '../utils/dateFormatter';
import Match from './Match';

class App extends Component {
	state = {
		leagueId: 148,
		range: {
			startDate: '2020-01-01',
			endDate: '2020-02-01'
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

	handleLeagueId = leagueId => {
		this.setState({
			leagueId
		});
	};

	render() {
		const { leagueId, range } = this.state;

		return (
			<div>
				<MatchTemplate
					header={
						<MatchFinder
							setRange={this.handleRange}
							setLeagueId={this.handleLeagueId}
							leagueId={leagueId}
						/>
					}
				>
					<Match range={range} leagueId={leagueId} />
				</MatchTemplate>
			</div>
		);
	}
}

export default App;
