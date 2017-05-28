import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './sidebar';

const App = () => (
    <Sidebar />
);

ReactDOM.render(<App />, document.getElementById('app'));