import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DateInput from './DateInput';
import Tooltip from '../Tooltip';
// import Overlay from '../Overlay';
import DateRange from './DateRange';

class DateControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rangeDate: {
                startDate: null,
                endDate: null
            }
        }
    }
    
    dateOnChange(range) {
        this.setState({rangeDate: range});
    }

    dateOnClick(range) {
        this.setState({rangeDate: range});
    }

    render() {
        const { format } = this.props;
        const { startDate, endDate } = this.state.rangeDate;
        return (
            <Tooltip trigger='hover' overlay={<DateRange format={format} DateOnClick={this.dateOnClick.bind(this)}/>}>
                <div>
                    <DateInput format={format} startDate={startDate} endDate={endDate} dateOnChange={this.dateOnChange.bind(this)}/>
                </div>
            </Tooltip>
        );
    }
}

DateControl.defaultProps = {
    format: 'DD MMM YYYY'
}

DateControl.propTypes = {
    formt: PropTypes.string
};

export default DateControl;