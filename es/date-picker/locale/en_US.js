import _extends from 'babel-runtime/helpers/extends';
import CalendarLocale from 'rc-calendar/es/locale/en_US';
import TimePickerLocale from '../../time-picker/locale/en_US';
// Merge into a locale object
var locale = {
    lang: _extends({ placeholder: 'Select date', rangePlaceholder: ['Start date', 'End date'] }, CalendarLocale),
    timePickerLocale: _extends({}, TimePickerLocale)
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/blob/master/components/date-picker/locale/example.json
export default locale;
