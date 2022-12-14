import _extends from 'babel-runtime/helpers/extends';
import CalendarLocale from 'rc-calendar/es/locale/it_IT';
import TimePickerLocale from '../../time-picker/locale/it_IT';
// Merge into a locale object
var locale = {
    lang: _extends({ placeholder: 'Selezionare la data', rangePlaceholder: ['Data d\'inizio', 'Data di fine'] }, CalendarLocale),
    timePickerLocale: _extends({}, TimePickerLocale)
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/issues/424
export default locale;
