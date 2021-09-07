'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactNative = require('react-native');

var _MultiPickerMixin = require('./MultiPickerMixin');

var _MultiPickerMixin2 = _interopRequireDefault(_MultiPickerMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var MultiPicker = function MultiPicker(props) {
    var children = props.children,
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
            }
        });
    });
    return React.createElement(
        _reactNative.View,
        { style: style },
        colElements
    );
};
exports['default'] = (0, _MultiPickerMixin2['default'])(MultiPicker);
module.exports = exports['default'];