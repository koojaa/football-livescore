import React, { Component } from 'react';
import ReactCalendar from 'react-calendar';
import './Calendar.scss';

class Calendar extends Component {
	render() {
		return (
			<div className="calendar">
				<ReactCalendar className="react-calendar" />
				<button className="calender-button">검색</button>
			</div>
		);
	}
}

export default Calendar;
