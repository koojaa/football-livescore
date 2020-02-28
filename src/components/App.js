import React, { Component } from 'react';
import MatchTemplate from './MatchTemplate/MatchTemplate';
import MatchFinder from './MatchFinder';

class App extends Component {
	render() {
		return (
			<div>
				<MatchTemplate header={<MatchFinder />} />
			</div>
		);
	}
}

export default App;
