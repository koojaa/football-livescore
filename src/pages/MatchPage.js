import React, { Component } from 'react';
import qs from 'qs';

import MatchTemplate from '../components/MatchTemplate';
import MatchFinder from '../components/MatchFinder';
import Match from '../components/Match';

class MatchPage extends Component {
  render() {
    const { match, location } = this.props;
    const { leagueName } = match.params;

    const range = qs.parse(location.search.substr(1));

    return (
      <MatchTemplate header={<MatchFinder />}>
        <Match range={range} leagueName={leagueName} />
      </MatchTemplate>
    );
  }
}

export default MatchPage;

// api example
// localhost:3000/match/premier&from=2019-12-02&to=2020-02-24
// localhost:3000/match/laliga&from=2020-01-20&to=2020-02-15
