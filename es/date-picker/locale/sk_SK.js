import _extends from 'babel-runtime/helpers/extends';
import CalendarLocale from 'rc-calendar/es/locale/sk_SK';
import TimePickerLocale from '../../time-picker/locale/sk_SK';
// 统一合并为完整的 Locale
var locale = {
    lang: _extends({ placeholder: 'Vybrať dátum', rangePlaceholder: ['Od', 'Do'] }, CalendarLocale),
    timePickerLocale: _extends({}, TimePickerLocale)
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/blob/master/components/date-picker/locale/example.json
export default locale;
