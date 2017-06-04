import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './dayCell.less';

class DayCell extends Component {
    render() {
        const { dayMoment, isPassive } = this.props;
        const date = dayMoment.date();
        return (
            <div className={styles.DayCell}>
                <span>{date}</span>
            </div>
        );
    }
}

DayCell.propTypes = {
    dayMoment: PropTypes.any,
    isPassive: PropTypes.bool
};

export default DayCell;