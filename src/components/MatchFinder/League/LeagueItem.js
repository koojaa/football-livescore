import React, { Component, Fragment } from 'react';
import './LeagueItem.scss';

class LeagueItem extends Component {
	render() {
		const { setLeagueId, selected, league_name, league_id } = this.props;

		return (
			<Fragment>
				<span
					className={`league ${selected && 'selected'}`}
					onClick={() => setLeagueId(league_id)}
				>
					{league_name}
				</span>
			</Fragment>
		);
	}
}

export default LeagueItem;
