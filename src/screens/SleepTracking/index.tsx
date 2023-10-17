import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import { Header, Paragraph } from '~Root/components';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';

const SleepTrackingScreen = ({ navigation }: any) => {
  const { t } = useTranslation();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={onBack}
        isBack={true}
        title={t('sleep_tracking') ?? ''}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <View style={GlobalStyles.ph15}>
        <Paragraph textWhite bold h4 title={t('sleep_tracking')} />
      </View>
    </SafeAreaLayout>
  );
};

export default SleepTrackingScreen;
