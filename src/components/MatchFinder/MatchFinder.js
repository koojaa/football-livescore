import React, { Component } from 'react';
import Calendar from './Calendar';

class MatchFinder extends Component {
	render() {
		const { setRange } = this.props;

		return (
			<div>
				<Calendar setRange={setRange} />
			</div>
		);
	}
}

export default MatchFinder;
