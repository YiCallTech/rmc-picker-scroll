'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _NativePicker = require('./NativePicker');

var _NativePicker2 = _interopRequireDefault(_NativePicker);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Item = _NativePicker2['default'].Item;

var Picker = function (_React$Component) {
    (0, _inherits3['default'])(Picker, _React$Component);

    function Picker() {
        (0, _classCallCheck3['default'])(this, Picker);
        return (0, _possibleConstructorReturn3['default'])(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Picker, [{
        key: 'getValue',
        value: function getValue() {
            if ('selectedValue' in this.props) {
                return this.props.selectedValue;
            }
            var children = React.Children.toArray(this.props.children);
            return children && children[0] && children[0].props.value;
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return this.props.selectedValue !== nextProps.selectedValue || this.props.children !== nextProps.children;
        }
    }, {
        key: 'render',
        value: function render() {
            var children = React.Children.map(this.props.children, function (c) {
                return React.createElement(Item, { label: c.props.children + '', value: c.props.value + '', key: c.key });
            });
            return React.createElement(
                _NativePicker2['default'],
                this.props,
                children
            );
        }
    }], [{
        key: 'Item',
        value: function Item() {}
    }]);
    return Picker;
}(React.Component);

Picker.defaultProps = {
    children: []
};
exports['default'] = Picker;
module.exports = exports['default'];