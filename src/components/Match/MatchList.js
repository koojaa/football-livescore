import React, { Component } from 'react';
import Match from './Match';
import axios from 'axios';

class MatchList extends Component {
	state = {
		loading: false,
		data: ''
	};

	getData = async () => {
		this.setState({
			loading: true
		});

		const { startDate, endDate } = this.props.range;
		const { leagueId } = this.props;

		const query = `&from=${startDate}&to=${endDate}&league_id=${leagueId}`;

		try {
			const response = await axios.get(
				`https://apiv2.apifootball.com/?action=get_events${query}&APIkey=${process.env.API_KEY}`
			);

			this.setState({
				data: response.data
			});
		} catch (e) {
			console.error(e);
		}

		this.setState({
			loading: false
		});
	};

	componentDidMount() {
		this.getData();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			this.props.range !== prevProps.range ||
			this.props.leagueId !== prevProps.leagueId
		) {
			this.getData();
		}
	}

	render() {
		const { loading, data } = this.state;

		return (
			<div>
				{loading && (
					<h3 style={{ textAlign: 'center' }}>데이터를 불러오는 중입니다...</h3>
				)}
				{!loading &&
					!data.error &&
					data &&
					data
						.slice()
						.reverse()
						.map(d => <Match key={d.match_id} data={d} />)}
			</div>
		);
	}
}

export default MatchList;
