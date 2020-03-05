import React, { Component, Fragment } from 'react';
import './LeagueItem.scss';
import { NavLink } from 'react-router-dom';

class LeagueItem extends Component {
  render() {
    const { league_name, league } = this.props;

    return (
      <Fragment>
        <NavLink
          activeClassName="selected"
          className="league"
          to={`/${league}`}
        >
          {league_name}
        </NavLink>
      </Fragment>
    );
  }
}

export default LeagueItem;
