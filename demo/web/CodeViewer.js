import React, { Component } from 'react';
import * as CodeMirror from 'codemirror';

export default class CodeViewer extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            codeText: props.codeText
        };
    }

    componentDidMount() {
        const config = {
            lineNumbers: true,
            lineWrapping: false,
            mode: 'js',
            readOnly: this.props.readOnly ? this.props.readOnly : false,
            tabSize: 2,
            scrollbarStyle: 'native',
            theme: 'default'
        };
        this.editor = CodeMirror.fromTextArea(this.refs.editor, config);
    }

    handleChange() {
        if (this.props.onChange) {
            this.props.onChange(this.editor.getValue());
        }
    }

    render() {
        return (
            <div>
                <span onClick={this.handleChange} >Run Code</span>
                <textarea ref='editor' defaultValue={this.state.codeText} />
            </div>
        );
    }
}