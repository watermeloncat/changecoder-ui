import moment from 'moment';

export const dateToString = (date, format) => {
    if (date && date.format) {
        return date.format(format);
    }
    return '';
}

export const stringToDate =(dateString, format) => {
    if (dateString && moment(dateString, format, true).isValid()) {
        return moment(dateString, format);
    }
    return '';
}