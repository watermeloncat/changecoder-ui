import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Prop extends Component {
    render() {
        const { name, type, required, children } = this.props;
        return (
            <tr>
                <td>{name}</td>
                <td>{children}</td>
                <td>{type}</td>
                <td>{required}</td>
            </tr>
        );
    }
}

Prop.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.string
};

export default Prop;