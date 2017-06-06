import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

class DateInput extends Component {
    render() {
        const { date, format} = this.props;
        return (
            <ul className={styles.DateInput}>
                <li>
                    <span className='icon-calendar'></span>
                </li>
                <li>
                    <input type='text' placeholder='Date' />
                </li>
            </ul>
        );
    }
}

DateInput.propTypes = {
    format: PropTypes.string
};

export default DateInput;