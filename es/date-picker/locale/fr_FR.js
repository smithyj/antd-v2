import _extends from 'babel-runtime/helpers/extends';
import CalendarLocale from 'rc-calendar/es/locale/fr_FR';
import TimePickerLocale from '../../time-picker/locale/fr_FR';
// Merge into a locale object
var locale = {
    lang: _extends({ placeholder: 'Sélectionner une date', rangePlaceholder: ['Date de début', 'Date de fin'] }, CalendarLocale),
    timePickerLocale: _extends({}, TimePickerLocale)
};
// All settings at:
// https://github.com/antd-v2-design/antd-v2-design/issues/424
export default locale;
