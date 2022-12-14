'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _th_TH = require('rc-calendar/lib/locale/th_TH');

var _th_TH2 = _interopRequireDefault(_th_TH);

var _th_TH3 = require('../../time-picker/locale/th_TH');

var _th_TH4 = _interopRequireDefault(_th_TH3);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Merge into a locale object
var locale = {
    lang: (0, _objectAssign2['default'])({
        placeholder: 'เลือกวันที่',
        rangePlaceholder: ['วันเริ่มต้น', 'วันสิ้นสุด']
    }, _th_TH2['default']),
    timePickerLocale: (0, _objectAssign2['default'])({}, _th_TH4['default'])
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/blob/master/components/date-picker/locale/example.json
exports['default'] = locale;
module.exports = exports['default'];
