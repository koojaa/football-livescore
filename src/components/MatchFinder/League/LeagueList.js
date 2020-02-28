import React, { Component } from 'react';
import LeagueItem from './LeagueItem';
import './LeagueList.scss';

/**
 *
 * Countries' Id
 *
 * England - 41
 * France - 46
 * Spain - 135
 * Italy - 68
 * Germany - 51
 *
 */

const leagueTypes = [
	{
		league_name: '프리미어 리그',
		league_id: 148
	},
	{
		league_name: '라리가',
		league_id: 468
	},
	{
		league_name: '세리에 A',
		league_id: 262
	},
	{
		league_name: '분데스리가',
		league_id: 196
	},
	{
		league_name: '리그 앙',
		league_id: 176
	},
	{
		league_name: '챔피언스리그',
		league_id: 149
	}
];

class LeagueList extends Component {
	render() {
		const { setLeagueId, leagueId } = this.props;

		return (
			<div>
				{
					<ul className="leagueList-wrapper">
						{leagueTypes.map(league => {
							return (
								<li key={league.league_id} className="leagueList">
									<LeagueItem
										league_id={league.league_id}
										league_name={league.league_name}
										setLeagueId={setLeagueId}
										selected={leagueId === league.league_id ? 'true' : false}
									/>
								</li>
							);
						})}
					</ul>
				}
			</div>
		);
	}
}

export default LeagueList;
