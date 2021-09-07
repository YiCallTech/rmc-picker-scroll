'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rmcDialog = require('rmc-dialog');

var _rmcDialog2 = _interopRequireDefault(_rmcDialog);

var _PopupMixin = require('./PopupMixin');

var _PopupMixin2 = _interopRequireDefault(_PopupMixin);

var _rmcFeedback = require('rmc-feedback');

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var getModal = function getModal(props, visible, _ref) {
  var getContent = _ref.getContent,
      hide = _ref.hide,
      onDismiss = _ref.onDismiss,
      onOk = _ref.onOk;

  if (!visible) {
    return null;
  }
  var prefixCls = props.prefixCls;

  return React.createElement(
    _rmcDialog2['default'],
    { prefixCls: '' + prefixCls, className: props.className || '', visible: true, closable: false, transitionName: props.transitionName || props.popupTransitionName, maskTransitionName: props.maskTransitionName, onClose: hide, style: props.style },
    React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: prefixCls + '-header' },
        React.createElement(
          _rmcFeedback2['default'],
          { activeClassName: prefixCls + '-item-active' },
          React.createElement(
            'div',
            { className: prefixCls + '-item ' + prefixCls + '-header-left', onClick: onDismiss },
            props.dismissText
          )
        ),
        React.createElement(
          'div',
          { className: prefixCls + '-item ' + prefixCls + '-title' },
          props.title
        ),
        React.createElement(
          _rmcFeedback2['default'],
          { activeClassName: prefixCls + '-item-active' },
          React.createElement(
            'div',
            { className: prefixCls + '-item ' + prefixCls + '-header-right', onClick: onOk },
            props.okText
          )
        )
      ),
      getContent()
    )
  );
};
exports['default'] = (0, _PopupMixin2['default'])(getModal, {
  prefixCls: 'rmc-picker-popup',
  WrapComponent: 'span',
  triggerType: 'onClick',
  pickerValueProp: 'selectedValue',
  pickerValueChangeProp: 'onValueChange'
});
module.exports = exports['default'];