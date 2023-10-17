import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';

import { GlobalStyles } from '~Root/config';
import { DropDown, Header } from '~Root/components';
import { useAppTheme } from '~Root/services/theme/hook';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack } from '~Root/navigation';
import { THEME } from '~Root/services/theme/colors';

interface ThemeOption {
  id: THEME | string;
  name: string;
}

const themes: ThemeOption[] = [
  { name: 'Default', id: THEME.DEFAULT },
  { name: 'Purple', id: THEME.PURPLE },
  { name: 'Green', id: THEME.GREEN },
  { name: 'Red', id: THEME.RED },
];

const ProfileThemeScreen = () => {
  const { t } = useTranslation();
  const { type, changeTheme } = useAppTheme();

  const selectedTheme = useMemo(() => themes.find(i => i.id === type), [type]);

  const onChangeTheme = (option: ThemeOption | undefined) => {
    if (!option) {
      return;
    }

    changeTheme(option.id as THEME);
  };

  return (
    <SafeAreaLayout edges={['bottom']}>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('settings')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={GlobalStyles.ph15}
        style={GlobalStyles.mb20}>
        <DropDown
          label={t('themes')}
          data={themes}
          onValueChange={onChangeTheme}
          dataDefault={selectedTheme}
          containerStyle={GlobalStyles.mb15}
        />
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default ProfileThemeScreen;
