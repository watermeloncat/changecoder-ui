import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.less';

class Pager extends Component {
    constructor(props) {
        super(props);
    }
    pageGenerate() {
        const { 
            maxButtonCount, 
            pageSize, 
            totalCount,
            currentIndex
         } = this.props;
        let lastPage = Math.ceil(totalCount / pageSize);
        let items = [];
        if (lastPage <= maxButtonCount) {
            for(let i = 1;i <= lastPage; i++) {
                items.push({pageNum: i});
            }
        } else {
            let middleNum = (maxButtonCount - 5) / 2;
            let left = currentIndex - middleNum + 1;
            let right = currentIndex + middleNum + 1;
            if (left > 3 && right < lastPage -2) {
                items.push({pageNum: 1});
                items.push({pageNum: -2});
                for (let i = left; i <= right; i++) {
                    items.push({pageNum: i});
                }
                items.push({pageNum: -1});
                items.push({pageNum: lastPage});
            } else {
                items.push({pageNum: 1});
                items.push({pageNum: -2});
                for (let i = lastPage - (maxButtonCount - 3); i <= lastPage; i++) {
                    items.push({pageNum: i});
                }
            }
        }
        return items;
    }

    onPageSelect(event) {
        const pageNum = parseInt(event.currentTarget.id);
        if (this.props.maxButtonCount) {
            this.props.onPageSelect(pageNum);
        }
    }

    render() {
        return (
            <div className={styles.pager}>
                <ul>
                    <li className={styles.numberSpan}>
                        {this.pageGenerate().map((item) => {
                            if (item.pageNum < 0) {
                                return <span key = {item.pageNum} >...</span>
                            } else {
                                return <a key = {item.pageNum} onClick={this.onPageSelect} id = {item.pageNum}>{item.pageNum}</a>
                            }
                        })}
                    </li>
                </ul>
            </div>
        );
    }
}

Pager.defaultProps = {
    currentIndex: 0,
    maxButtonCount: 7,
    pageSize: 50
}

Pager.propTypes = {
    currentIndex: PropTypes.number,
    maxButtonCount: PropTypes.number,
    pageSize: PropTypes.number,
    onPageSelect: PropTypes.func,
    totalCount: PropTypes.number.isRequired
};

export default Pager;