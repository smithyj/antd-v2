'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _el_GR = require('rc-calendar/lib/locale/el_GR');

var _el_GR2 = _interopRequireDefault(_el_GR);

var _el_GR3 = require('../../time-picker/locale/el_GR');

var _el_GR4 = _interopRequireDefault(_el_GR3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Merge into a locale object
var locale = {
    lang: (0, _extends3['default'])({ placeholder: 'Επιλέξτε ημερομηνία', rangePlaceholder: ['Αρχική ημερομηνία', 'Τελική ημερομηνία'] }, _el_GR2['default']),
    timePickerLocale: (0, _extends3['default'])({}, _el_GR4['default'])
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/issues/424
exports['default'] = locale;
module.exports = exports['default'];
