import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Babel from 'babel-standalone';

import CodeViewer from './CodeViewer';

import {DatePicker} from '../../src';

export default class CodeEditor extends Component {
    constructor(props) {
        super(props);
        this.textEditorChange = this.textEditorChange.bind(this);
        this.state = {
            codeText: props.codeText
        };
    }
    
    textEditorChange(val) {
        this.setState({codeText: val});
    }

    render() {
        const { codeText } = this.state;
        return (
            <div>
                <CodeViewer codeText={codeText} onChange={this.textEditorChange} />
            </div>
        );
    }

    transform(code) {
        return Babel.transform(code, { presets: ["react", "es2015", "stage-2"] });
    }
}