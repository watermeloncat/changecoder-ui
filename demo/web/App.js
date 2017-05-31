import React, {Component} from 'react';
import * as Babel from 'babel-standalone';
import CodeEditor from './CodeEditor';

const { DatePicker } = require('../patterns/patterns.js'); 

class App extends Component {
    render() {
        const code = DatePicker;
        return (
            <div>
                <CodeEditor codeText={code} />
            </div>
            
        );
    }
}

export default App;