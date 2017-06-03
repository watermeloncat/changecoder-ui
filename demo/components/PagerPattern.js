import React, { Component } from 'react';
import PropTypes from 'prop-types';

const { Pager } = require('./patterns.js'); 
import CodeEditor from './utils/CodeEditor';

class PagerPattern extends Component {
    render() {
        return (
            <div>
                <CodeEditor codeText={Pager} />
            </div>
        );
    }
}

PagerPattern.propTypes = {

};

export default PagerPattern;