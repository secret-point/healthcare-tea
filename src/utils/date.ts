import moment from 'moment';
import 'moment/min/locales';

export const toMoment = (date: Date, locale?: string) => {
  return locale ? moment(date).locale(locale) : moment(date);
};

export const diffNow = (date: Date | string) => {
  return moment.duration(moment(date).diff(new Date())).humanize();
};
