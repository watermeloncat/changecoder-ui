import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './index.less';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.monthChange = this.monthChange.bind(this);
        this.state = {
            date: props.date
        };
    }

    monthChange(val) {
        const { date } = this.state;
        this.setState({
            date: date.clone().add(val, 'months')
        });
    }
    
    renderMonthYear() {
        const {date} = this.state;
        const year = date.get('year');
        const month = date.get('month');
        return (
            <div className={styles.MonthAndYear}>
                <span className='icon-angle-left' onClick={() => this.monthChange(-1)}></span>
                <span className={styles.Month}>{ month+1 }</span>  
                <span className={styles.Year}>{year}</span>
                <span className='icon-angle-right' onClick={() => this.monthChange(+1)}></span>
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
        const { date } = this.state;
        const start = date.clone().startOf('month').get('weekday');
        const currentMonthDaysCount = date.clone().endOf('month').get('date');
        const lastMonthDaysCount = start;
        const nextMonthDaysCount = 42 - currentMonthDaysCount - lastMonthDaysCount;
        const days = [];
        if (lastMonthDaysCount > 0) {
            const lastMonthDays = date.clone().add(-1, 'M').endOf('month').get('date');
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
    date: moment()
}

DatePicker.propTypes = {
    date: PropTypes.object,
    format: PropTypes.string
};

export default DatePicker;