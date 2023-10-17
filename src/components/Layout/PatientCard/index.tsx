import { TouchableOpacity, ViewStyle } from 'react-native';
import React, { memo } from 'react';

import { GlobalStyles } from '~Root/config';
import styles from './styles';
import { useAppTheme } from '~Root/services/theme/hook';
import { Image, Paragraph } from '~Root/components';
import { ColorVariant } from '~Root/components/Paragraph';
import { useTranslation } from 'react-i18next';
import { AppRoute } from '~Root/navigation/AppRoute';
import { navigate } from '~Root/navigation';

interface Props {
  no?: string;
  name?: string;
  age?: number;
  sessions?: number;
  image?: string;
  styleContainer?: ViewStyle;
}

const PatientCard: React.FC<Props> = memo(
  ({ no, name, age, image, sessions, styleContainer = {} }) => {
    const { globalStyles } = useAppTheme(true);
    const { t } = useTranslation();

    const goToParentDetail = () => {
      navigate(AppRoute.PATIENT_DETAIL);
    };

    return (
      <TouchableOpacity
        onPress={goToParentDetail}
        style={[
          globalStyles.bgContrast,
          GlobalStyles.flexCol,
          GlobalStyles.rounded8,
          styles.card,
          styleContainer,
        ]}>
        <Paragraph
          h6
          semibold
          colorVariant={ColorVariant.HINT}
          title={no}
          style={GlobalStyles.mb3}
        />
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={[styles.image, GlobalStyles.rounded4, GlobalStyles.mb8]}
        />
        <Paragraph
          h6
          semibold
          colorVariant={ColorVariant.REV_CONTRAST}
          title={name}
          style={GlobalStyles.mb3}
        />
        <Paragraph
          h6
          regular
          colorVariant={ColorVariant.REV_CONTRAST}
          title={t('age_yo', { age })}
          style={GlobalStyles.mb3}
        />
        <Paragraph
          h6
          regular
          colorVariant={ColorVariant.REV_CONTRAST}
          title={t('sessions', { number: sessions })}
        />
      </TouchableOpacity>
    );
  },
);

export default PatientCard;
