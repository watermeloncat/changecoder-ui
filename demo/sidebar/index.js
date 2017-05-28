import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import styles from './index.less';
import App from '../web/App';
import DatePickerPattern from '../patterns/DatePickerPattern';

class Sidebar extends Component {
    render() {
        return (
            <Router>
                <div className={styles.content}> 
                    <div className={styles.sidebar}>
                        <Link to="/">React-UI</Link>
                        <h5>Form</h5>
                        <ul className={styles.componentPattern}>
                            <li><Link to="/component/datepicker">DateControl</Link></li>
                        </ul>
                    </div>
                    <div className={styles.component}>
                        <Route exact path='/' component={App} />
                        <Route path='/component/:componentName' component={DatePickerPattern} />
                    </div>
                </div>
            </Router>
        );
    }
}

Sidebar.propTypes = {

};

export default Sidebar;