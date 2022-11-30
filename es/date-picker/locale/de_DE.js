import _extends from 'babel-runtime/helpers/extends';
import CalendarLocale from 'rc-calendar/es/locale/de_DE';
import TimePickerLocale from '../../time-picker/locale/de_DE';
// Merge into a locale object
var locale = {
    lang: _extends({ placeholder: 'Datum auswählen', rangePlaceholder: ['Startdatum', 'Enddatum'] }, CalendarLocale),
    timePickerLocale: _extends({}, TimePickerLocale)
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/issues/424
export default locale;
