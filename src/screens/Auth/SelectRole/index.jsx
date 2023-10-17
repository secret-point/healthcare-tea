import React, { useCallback, useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { AuthHeader, Radio, Paragraph } from '~Root/components';
import { GlobalStyles, IMAGES } from '~Root/config';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { useDispatch } from 'react-redux';
import { goBack, navigate } from '~Root/navigation';
import { AppRoute } from '~Root/navigation/AppRoute';

const SelectRoleScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedRole, setSelectedRole] = useState(null);

  const onSelect = role => {
    setSelectedRole(role);
    navigation.navigate(AppRoute.REGISTER,  { role: role });
   
  };

  return (
    <SafeAreaLayout edges={['bottom']}>
      <AuthHeader
        showLeft={false}
        style={GlobalStyles.mb20}
        onPressLeft={goBack}
      />

      <KeyboardAvoidingView style={GlobalStyles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={[GlobalStyles.flexCol, GlobalStyles.ph15]}>
            <View style={[GlobalStyles.flexCol, GlobalStyles.mb30]}>
              <View style={[GlobalStyles.pb25]}>
                <Paragraph
                  h4
                  semibold
                  textWhite
                  title={t('select_role_register_title')}
                  style={[
                    GlobalStyles.lineHeight22,
                    GlobalStyles.mb10,
                    GlobalStyles.mr20,
                    GlobalStyles.mt30,
                  ]}
                />
                <Paragraph
                  textWhite
                  semibold
                  title={t('select_role_register_description')}
                  style={[GlobalStyles.lineHeight22, GlobalStyles.mb15]}
                />
                <Radio
                  key={'patient'}
                  name={t('role_register_patient')}
                  onSelect={() => onSelect('patient')}
                  selected={'patient' === selectedRole}
                />
                <Radio
                  key={'therapist'}
                  name={t('role_register_therapist')}
                  onSelect={() => onSelect('therapist')}
                  selected={'therapist' === selectedRole}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaLayout>
  );
};

export default SelectRoleScreen;
