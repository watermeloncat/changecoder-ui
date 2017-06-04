import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Babel from 'babel-standalone';

import CodeViewer from './CodeViewer';
import styles from './codeEditor.less';

const { 
    DatePicker,
    Pager,
    Calendar
} = require('../../../src');

export default class CodeEditor extends Component {
    constructor(props) {
        super(props);
        this.textEditorChange = this.textEditorChange.bind(this);
        this.state = {
            codeText: props.codeText,
            codeChanged: false
        };
    }

    componentWillMount() {
        const render = ReactDOM.render;
        ReactDOM.render = (element) => {
            this.initialExample = element;
        };
        const mountNode = null;
        try {
            const compileCode = this.transform(this.props.codeText).code;
            eval(compileCode);
        } finally {
            ReactDOM.render = render;
        }
    }

    componentWillUnmount() {
        this.clearExample();
    }

    componentDidUpdate() {
        this.runCode();
    }
    
    clearExample() {
        if (!this.state.codeChanged) {
           return null;
        }
        const mountNode = this.refs.mount;
        try {
            ReactDOM.unmountComponentAtNode(mountNode);
        } catch (e) {
            console.log(e);
        }
        return mountNode;
    }

    textEditorChange(val) {
        this.setState(
            { 
                codeText: val,
                codeChanged: true 
            }
        );
    }

    renderExample() {
        let example;
        if (this.state.codeChanged) {
            example = (
                <div ref='mount' />
            );
        } else {
            example = (
                <div>{this.initialExample}</div>
            );
        }
        return (
            <div>{example}</div>
        )
    }

    render() {
        const { codeText } = this.state;
        return (
            <div>
                <div className={styles.demo}>{this.renderExample()}</div>
                <CodeViewer codeText={codeText} onChange={this.textEditorChange} />
            </div>
        );
    }

    runCode() {
        const mountNode = this.clearExample();
        let compiledCode = null;
        try {
            compiledCode = this.transform(this.state.codeText).code;
            eval(compiledCode);
        } catch (err) {
            if (compiledCode !== null) {
                console.log(err, compiledCode);
            } else {
                console.log(err);
            }
        }
    }

    transform(code) {
        return Babel.transform(code, { plugins: ['transform-react-jsx'], presets: ["react", "es2015", "stage-2"] });
    }
}