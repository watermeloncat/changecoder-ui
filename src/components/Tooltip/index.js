import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode, findDOMNode} from 'react-dom';
const triggerEventMap = {
    click: ['onClick'],
    focus: ['onFocus', 'onBlur'],
    hover: ['onMouseOver', 'onMouseOut']
};

export default class Tooltip extends Component {
    constructor(props) {
        super(props);
        this.state = {isOverlay: false};
    }
    applyClassNameAndStyle() {
        const triggerDom = findDOMNode(this.triggerContainer);
        const offsetLeft = triggerDom.offsetLeft;
        const offsetTop = triggerDom.offsetTop;
        const clientHeight = triggerDom.clientHeight;
        const style = this.node.style;
        Object.assign(style, {
            width: '420px',
            height: '240px',
            position: 'absolute',
            left: offsetLeft + 'px',
            top: (offsetTop + clientHeight) + 'px',
            backgroundColor: 'red'
        });
    }
    getPopover() {
        const { overlay } = this.props;
        const overlayContainer = typeof overlay === 'function' ? overlay() : overlay;
        return overlayContainer;
    }
    triggerEventHandle() {
        this.setState({isOverlay: !this.state.isOverlay});
    }
    componentDidMount() {
        this.triggerContainer = this.refs.triggerContainer;
    }
    componentDidUpdate() {
        const {isOverlay} = this.state;
        if (isOverlay) {
            this.renderPopover();
        } else {
            this.unRenderPopover();
        }
    }
    renderPopover() {

        if (!this.node) {
            this.node = document.createElement('div');
            this.applyClassNameAndStyle();
            document.body.appendChild(this.node);
        }
        const container = this.getPopover();
        unstable_renderSubtreeIntoContainer(
            this,
            container,
            this.node
        );

    }
    unRenderPopover() {
        if (this.node) {
            unmountComponentAtNode(this.node);
            document.body.removeChild(this.node);
            this.node = null;
        }
    }
    render() {
        const {children, trigger} = this.props;
        const props = {};
        triggerEventMap[trigger].map(item => props[item] = this.triggerEventHandle.bind(this));
        const triggerContainer = cloneElement(children, {...props, ref: 'triggerContainer'});
        return triggerContainer;
    }
}

Tooltip.propTypes = {
    align: PropTypes.string,
    trigger: PropTypes.oneOf(['click', 'hover', 'focus']),
    overlay: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.element
    ]).isRequired,
}
