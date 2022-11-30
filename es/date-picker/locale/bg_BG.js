import _extends from 'babel-runtime/helpers/extends';
import CalendarLocale from 'rc-calendar/es/locale/bg_BG';
import TimePickerLocale from '../../time-picker/locale/bg_BG';
// Merge into a locale object
var locale = {
    lang: _extends({ placeholder: 'Избор на дата', rangePlaceholder: ['Начална', 'Крайна'] }, CalendarLocale),
    timePickerLocale: _extends({}, TimePickerLocale)
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/blob/master/components/date-picker/locale/example.json
export default locale;
