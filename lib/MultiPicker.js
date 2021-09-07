'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _MultiPickerMixin = require('./MultiPickerMixin');

var _MultiPickerMixin2 = _interopRequireDefault(_MultiPickerMixin);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MultiPicker = function MultiPicker(props) {
    var prefixCls = props.prefixCls,
        className = props.className,
        rootNativeProps = props.rootNativeProps,
        children = props.children,
        style = props.style;

    var selectedValue = props.getValue();
    var colElements = React.Children.map(children, function (col, i) {
        return React.cloneElement(col, {
            selectedValue: selectedValue[i],
            onValueChange: function onValueChange() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return props.onValueChange.apply(props, [i].concat(args));
            },
            onScrollChange: props.onScrollChange && function () {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                return props.onScrollChange.apply(props, [i].concat(args));
            }
        });
    });
    return React.createElement(
        'div',
        (0, _extends3['default'])({}, rootNativeProps, { style: style, className: (0, _classnames2['default'])(className, prefixCls) }),
        colElements
    );
};
exports['default'] = (0, _MultiPickerMixin2['default'])(MultiPicker);
module.exports = exports['default'];