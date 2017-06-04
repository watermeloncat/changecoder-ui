import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CodeEditor from './utils/CodeEditor';
const { Calendar } = require('./patterns.js'); 

class CalendarPattern extends Component {
    render() {
        return (
            <div>
                <CodeEditor codeText={Calendar} />
            </div>
        );
    }
}

CalendarPattern.propTypes = {

};

export default CalendarPattern;