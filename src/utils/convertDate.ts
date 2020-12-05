import { unix, locale } from 'moment';

export const convertDate = (initialDate: string | undefined) => {
  locale('ru');
  if (initialDate) {
    const date = new Date(initialDate);
    const epoch = date.getTime() / 1000.0;
    const created = unix(epoch);
    return created.utc().fromNow();
  }
};