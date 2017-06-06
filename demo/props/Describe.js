import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Describe extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Describe;