import _extends from 'babel-runtime/helpers/extends';
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';
var Icon = function Icon(props) {
    var type = props.type,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        spin = props.spin;

    var classString = classNames(_defineProperty({
        'anticon-v2': true,
        'anticon-v2-spin': !!spin || type === 'loading'
    }, 'anticon-v2-' + type, true), className);
    return React.createElement('i', _extends({}, omit(props, ['type', 'spin']), { className: classString }));
};
export default Icon;
