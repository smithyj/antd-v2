import _extends from 'babel-runtime/helpers/extends';
import CalendarLocale from 'rc-calendar/es/locale/pt_BR';
import TimePickerLocale from '../../time-picker/locale/pt_BR';
// Merge into a locale object
var locale = {
    lang: _extends({ placeholder: 'Selecionar data', rangePlaceholder: ['Data de início', 'Data de fim'] }, CalendarLocale),
    timePickerLocale: _extends({}, TimePickerLocale)
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/blob/master/components/date-picker/locale/example.json
export default locale;
