import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DateInput from './DateInput';
import Tooltip from '../Tooltip';
import Calendar from '../Calendar';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null
        };
    }

    render() {
        const { format } = this.props;
        const { date } = this.state;
        return (
            <Tooltip trigger='hover' overlay={<Calendar />}>
                <div>
                    <DateInput format={format} date={date} />
                </div>
            </Tooltip>
        );
    }
}

DatePicker.defaultProps = {
    format: 'DD MMM YYYY'
}

DatePicker.propTypes = {
    formt: PropTypes.string
};

export default DatePicker;