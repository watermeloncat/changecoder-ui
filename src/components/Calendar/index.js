import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DayCell from './DayCell';
const cx = require('classnames');

import { getCurrentDate, Months} from './utils';
import styles from './index.less';

class Calendar extends Component {

    constructor(props) {
        super(props);
        this.renderYearAndMonth = this.renderYearAndMonth.bind(this);
        this.renderWeek = this.renderWeek.bind(this);
        this.renderDays = this.renderDays.bind(this);
        this.changeMonth = this.changeMonth.bind(this);
        this.state = {
            showDate: props.showDate
        };
    }

    changeMonth(num) {
        const { showDate } = this.state;
        this.setState({
            showDate: showDate.clone().add(num, 'month')
        });
    }

    renderYearAndMonth() {
        const { showDate } = this.state;
        const year = showDate.year();
        const month = Months[showDate.month()];
        return (
            <div className={styles.YearAndMonth}>
                <span className={cx('icon-angle-left', styles.leftIcon)} onClick={() => this.changeMonth(-1)}></span>
                <span className={styles.Month}>{month}</span>
                <span className={styles.Year}>{year}</span>
                <span className={cx('icon-angle-right', styles.rightIcon)} onClick={() => this.changeMonth(1)}></span>
            </div>
        )
    }

    renderWeek() {
        return (
            <div className={styles.Week}>
                <span>Su</span>
                <span>Mo</span>
                <span>Tu</span>
                <span>We</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
            </div>
        )
    }

    renderDays() {
        const { showDate } = this.state;
        const lastMonthDaysCount = showDate.clone().startOf('month').weekday();
        const currentMonthDaysCount = showDate.clone().endOf('month').date();
        const nextMonthDaysCount = 42 - currentMonthDaysCount - lastMonthDaysCount;
        const days = [];
        if (lastMonthDaysCount > 0) {
            for (let i = 1; i <= lastMonthDaysCount; i++) {
                days.unshift({dayMoment: showDate.clone().startOf('month').add(-i, 'day'), isPassive: false});
            }
        }
        for (let j = 1; j < currentMonthDaysCount + 1; j++) {
            days.push({dayMoment: showDate.clone().set('date', j), isPassive: true});
        }
        for (let l = 1; l < nextMonthDaysCount + 1; l++) {
            days.push({dayMoment: showDate.clone().endOf('month').add(l, 'day'), isPassive: false});
        }
        return (
            <div className={styles.Days}>
                {days.map((item, index) => {
                    return <DayCell {...item} key={index}/>;
                })}
            </div>
        )
    }

    render() {
        const { className } = this.props;
        return (
            <div className={className}>
                <div className={styles.Calendar}>
                    {this.renderYearAndMonth()}
                    {this.renderWeek()}
                    {this.renderDays()}
                </div>
            </div>
        );
    }
}

Calendar.defaultProps = {
    showDate: getCurrentDate()
};

Calendar.propTypes = {
    date: PropTypes.object,
    showDate: PropTypes.object,
    className: PropTypes.string
};

export default Calendar;