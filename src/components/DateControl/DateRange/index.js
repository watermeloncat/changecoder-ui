import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class DateRange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date
        };
    }

    renderYear() {
        const year = moment().get('year');
        return (
            <div>{year}</div>
        )
    }

    renderMonth() {
        const month = moment().get('month');
        return (
            <div>{month}</div>
        )
    }

    renderDays() {
        const start = moment().startOf('month').get('weekday');
        const currentMonthDaysCount = moment().endOf('month').get('date');
        const lastMonthDaysCount = start;
        const nextMonthDaysCount = 42 - currentMonthDaysCount - lastMonthDaysCount;
        const days = [];
        if (lastMonthDaysCount > 0) {
            const lastMonthDays = moment().add(-1, 'M').endOf('month').get('date');
            for (let i = 0; i < lastMonthDaysCount; i++) {
                days.push(lastMonthDays -i);
            }
        }
        for (let j = 1; j < currentMonthDaysCount + 1; j++) {
            days.push(j)
        }
        for (let l = 1; l < nextMonthDaysCount + 1; l++) {
            days.push(l)
        }
        return (
            <ul>{days.map((item, index) => <li key={index}>{item}</li>)}</ul>
        );
    }

    render() {
        const { defaultDate } = this.props;
        return (
            <div>
                {this.renderYear()}
                {this.renderMonth()}
                {this.renderDays()}
            </div>
        );
    }
}

DateRange.defaultProps = {
    format: 'MMM DD YY',
    defaultDate: moment().format('MMM DD YY')
}

DateRange.propTypes = {
    defaultDate: PropTypes.string,
    format: PropTypes.string
};

export default DateRange;