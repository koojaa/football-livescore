import React, { Component } from 'react';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

class Root extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</div>
		);
	}
}

export default Root;
