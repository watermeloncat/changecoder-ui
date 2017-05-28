import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

import {dateToString, stringToDate} from '../utils';

class DateInput extends Component {

    startDateChange(e) {
        const {format, endDate, dateOnChange} = this.props;
        if (e.target && e.target.value && stringToDate(e.target.value, format)) {
            dateOnChange({
                startDate: stringToDate(e.target.value, format),
                endDate
            });
        }
    }

    endDateChange(e) {
        const {format, endDate, dateOnChange} = this.props;
        if (e.target && e.target.value && stringToDate(e.target.value, format)) {
            dateOnChange({
                endDate: stringToDate(e.target.value, format),
                startDate
            });
        }
    }
    render() {
        const { startDate, endDate, format} = this.props;
        return (
            <ul className='DateInput'>
                <li>
                    <span className='icon-calendar'></span>
                </li>
                <li>
                    <input type='text' placeholder='Start Date' value={dateToString(startDate, format)} onChange={(e) => this.startDateChange.bind(this, e)} />
                </li>
                <li>
                    <span className='icon-angle-right'></span>
                </li>
                <li>
                    <input type='text' placeholder='End Date' value={dateToString(endDate, format)} onChange={(e) => this.endDateChange.bind(this, e)}/>
                </li>
            </ul>
        );
    }
}

DateInput.propTypes = {
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    format: PropTypes.string,
    dateOnChange: PropTypes.func
};

export default DateInput;