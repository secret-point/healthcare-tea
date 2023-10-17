import { useTranslation } from 'react-i18next';
import React, { Text } from 'react-native';
import { BASE_COLORS } from '~Root/config';
import { ErrorResponse } from '~Root/utils';

type Props = {
  error?: string | ErrorResponse | null;
};
export default function ServerError({ error }: Props) {
  const { t } = useTranslation();
  if (!error) {
    return null;
  }
  console.log('ERROR', error);
  let value = t('errors.unknown');
  if (error instanceof ErrorResponse) {
    const key = `errors.${error.code}`;
    if (t(key) !== key) {
      value = t(key);
    }
  }
  if (typeof error === 'string' || error instanceof String) {
    value = error as string;
  }

  return <Text style={{ color: BASE_COLORS.redColor }}>{value}</Text>;
}
