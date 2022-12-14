import _extends from 'babel-runtime/helpers/extends';
import CalendarLocale from 'rc-calendar/es/locale/zh_TW';
import TimePickerLocale from '../../time-picker/locale/zh_TW';
var locale = {
    lang: _extends({ placeholder: '請選擇日期', rangePlaceholder: ['開始日期', '結束日期'] }, CalendarLocale),
    timePickerLocale: _extends({}, TimePickerLocale)
};
locale.lang.ok = '確 定';
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/blob/master/components/date-picker/locale/example.json
export default locale;
