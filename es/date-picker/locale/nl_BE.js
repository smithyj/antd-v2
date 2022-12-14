import _extends from 'babel-runtime/helpers/extends';
import CalendarLocale from 'rc-calendar/es/locale/nl_BE';
import TimePickerLocale from '../../time-picker/locale/nl_BE';
// Merge into a locale object
var locale = {
    lang: _extends({ placeholder: 'Selecteer datum', rangePlaceholder: ['Begin datum', 'Eind datum'] }, CalendarLocale),
    timePickerLocale: _extends({}, TimePickerLocale)
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/issues/424
export default locale;
