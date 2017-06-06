import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './componentProp.less';

class ComponentProp extends Component {
    render() {
        return (
            <div className={styles.ComponentProp}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Describe</th>
                            <th>Type</th>
                            <th>IsRequired</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ComponentProp;