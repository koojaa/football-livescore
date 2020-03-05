import React, { Component } from 'react';
import Match from './Match';
import axios from 'axios';
import leagueIdMapper from '../../utils/leagueIdMapper';

class MatchList extends Component {
  state = {
    loading: false,
    data: ''
  };

  getData = async () => {
    this.setState({
      loading: true
    });

    const { from, to } = this.props.range;
    const { leagueName } = this.props;
    console.log(leagueName);
    const leagueId = leagueIdMapper(leagueName);

    const query = `&from=${from}&to=${to}&league_id=${leagueId}`;

    try {
      const response = await axios.get(
        `https://apiv2.apifootball.com/?action=get_events${query}&APIkey=6bbbf7c5391af62da1d56e0148ac5d58d3a1d4efe43259ca3db01eee1ba598ae`
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
