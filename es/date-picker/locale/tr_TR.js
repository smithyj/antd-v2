import _extends from 'babel-runtime/helpers/extends';
import CalendarLocale from 'rc-calendar/es/locale/en_US';
import TimePickerLocale from '../../time-picker/locale/tr_TR';
// Merge into a locale object
var locale = {
    lang: _extends({ placeholder: 'Tarih Seç', rangePlaceholder: ['Başlangıç Tarihi', 'Bitiş Tarihi'] }, CalendarLocale),
    timePickerLocale: _extends({}, TimePickerLocale)
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/blob/master/components/date-picker/locale/example.json
export default locale;
