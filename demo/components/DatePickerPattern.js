import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CodeEditor from './utils/CodeEditor';
const { DatePicker } = require('./patterns.js'); 

class DatePickerPattern extends Component {
    render() {
        return (
            <div>
                <CodeEditor codeText={DatePicker} />
            </div>
        );
    }
}

DatePickerPattern.propTypes = {

};

export default DatePickerPattern;