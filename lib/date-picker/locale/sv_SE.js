'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _sv_SE = require('rc-calendar/lib/locale/sv_SE');

var _sv_SE2 = _interopRequireDefault(_sv_SE);

var _sv_SE3 = require('../../time-picker/locale/sv_SE');

var _sv_SE4 = _interopRequireDefault(_sv_SE3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var locale = {
    lang: (0, _extends3['default'])({ placeholder: 'Välj datum', rangePlaceholder: ['Startdatum', 'Slutdatum'] }, _sv_SE2['default']),
    timePickerLocale: (0, _extends3['default'])({}, _sv_SE4['default'])
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/blob/master/components/date-picker/locale/example.json
exports['default'] = locale;
module.exports = exports['default'];
