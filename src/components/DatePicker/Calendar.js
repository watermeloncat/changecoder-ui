import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './index.less';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date
        };
    }

    renderMonthYear() {
        const year = moment().get('year');
        const month = moment().get('month');
        return (
            <div className={styles.MonthAndYear}>
                <span className='icon-angle-left'></span>
                <span className='Month'>{month}</span>  
                <span className='Year'>{year}</span>
                <span className='icon-angle-right'></span>
            </div>
        )
    }

    renderWeek() {
        return (
            <div className={styles.Week}>
                <ul>
                    <li>Su</li>
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                </ul>
            </div>
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
            <div className={styles.Days}><ul>{days.map((item, index) => <li key={index}>{item}</li>)}</ul></div>
        );
    }

    render() {
        const { defaultDate } = this.props;
        return (
            <div className={styles.Calendar}>
                {this.renderMonthYear()}
                {this.renderWeek()}
                {this.renderDays()}
            </div>
        );
    }
}

DatePicker.defaultProps = {
    format: 'MMM DD YY',
    defaultDate: moment().format('MMM DD YY')
}

DatePicker.propTypes = {
    defaultDate: PropTypes.string,
    format: PropTypes.string
};

export default DatePicker;