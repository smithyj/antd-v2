import _extends from 'babel-runtime/helpers/extends';
import CalendarLocale from 'rc-calendar/es/locale/pl_PL';
import TimePickerLocale from '../../time-picker/locale/pl_PL';
// Merge into a locale object
var locale = {
    lang: _extends({ placeholder: 'Wybierz datę', rangePlaceholder: ['Data początkowa', 'Data końcowa'] }, CalendarLocale),
    timePickerLocale: _extends({}, TimePickerLocale)
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/blob/master/components/date-picker/locale/example.json
export default locale;
