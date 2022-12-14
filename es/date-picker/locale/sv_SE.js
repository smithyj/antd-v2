import _extends from 'babel-runtime/helpers/extends';
import CalendarLocale from 'rc-calendar/es/locale/sv_SE';
import TimePickerLocale from '../../time-picker/locale/sv_SE';
var locale = {
    lang: _extends({ placeholder: 'Välj datum', rangePlaceholder: ['Startdatum', 'Slutdatum'] }, CalendarLocale),
    timePickerLocale: _extends({}, TimePickerLocale)
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/blob/master/components/date-picker/locale/example.json
export default locale;
