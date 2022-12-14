import _extends from 'babel-runtime/helpers/extends';
import CalendarLocale from 'rc-calendar/es/locale/es_ES';
import TimePickerLocale from '../../time-picker/locale/es_ES';
// Merge into a locale object
var locale = {
    lang: _extends({ placeholder: 'Seleccionar fecha', rangePlaceholder: ['Fecha inicial', 'Fecha final'] }, CalendarLocale),
    timePickerLocale: _extends({}, TimePickerLocale)
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/blob/master/components/date-picker/locale/example.json
export default locale;
