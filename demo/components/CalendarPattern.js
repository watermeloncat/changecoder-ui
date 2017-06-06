import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CodeEditor from './utils/CodeEditor';
import { ComponentProp, Prop, Describe } from '../props';
const { Calendar } = require('./patterns.js'); 

class CalendarPattern extends Component {
    render() {
        return (
            <div>
                <CodeEditor codeText={Calendar} />
                <ComponentProp>
                    <Prop name='date' type='object' required='false'>
                        <Describe>Moment Date Object</Describe>
                    </Prop>
                    <Prop name='showDate' type='object' required='false'>
                        <Describe>Moment Date Object</Describe>
                    </Prop>
                    <Prop name='className' type='string' required='false'>
                        <Describe>Add Class</Describe>
                    </Prop>
                </ComponentProp>
            </div>
        );
    }
}

CalendarPattern.propTypes = {

};

export default CalendarPattern;