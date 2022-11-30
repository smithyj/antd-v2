import _extends from 'babel-runtime/helpers/extends';
import CalendarLocale from 'rc-calendar/es/locale/ca_ES';
import TimePickerLocale from '../../time-picker/locale/ca_ES';
// Merge into a locale object
var locale = {
    lang: _extends({ placeholder: 'Seleccionar data', rangePlaceholder: ['Data inicial', 'Data final'] }, CalendarLocale),
    timePickerLocale: _extends({}, TimePickerLocale)
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/blob/master/components/date-picker/locale/example.json
export default locale;
