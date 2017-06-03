import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

import App from '../web/App';
import DatePickerPattern from '../components/DatePickerPattern';
import PagerPattern from '../components/PagerPattern';

const Routes = {
    DatePicker: {
        path: '/component/datepicker',
        component: DatePickerPattern
    },
    Pager: {
        path: '/component/pager',
        component: PagerPattern
    }
}

class RouteTable extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={App} />
                {
                    Object.keys(Routes).map((item, index) => <Route key={index} path={Routes[item].path} component={Routes[item].component} />)
                }
            </div>
        );
    }
}

RouteTable.propTypes = {

};

export default RouteTable;



