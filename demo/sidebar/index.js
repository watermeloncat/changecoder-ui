import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import styles from './index.less';
import RouteTable from './routes';

class Sidebar extends Component {
    render() {
        return (
            <Router>
                <div className={styles.content}> 
                    <div className={styles.sidebar}>
                        <Link to='/'>React-UI</Link>
                        <h5>Form</h5>
                        <ul className={styles.componentPattern}>
                            <li><Link to='/component/datepicker'>DateControl</Link></li>
                        </ul>
                        <h5>List</h5>
                        <ul className={styles.componentPattern}>
                            <li><Link to='/component/pager'>Pager</Link></li>
                        </ul>
                    </div>
                    <div className={styles.component}>
                        <RouteTable />
                    </div>
                </div>
            </Router>
        );
    }
}

Sidebar.propTypes = {

};

export default Sidebar;