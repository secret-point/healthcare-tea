import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { Header, FieldInput } from '~Root/components';
import { GlobalStyles } from '~Root/config';
import { goBack } from '~Root/navigation';
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from '~Root/components/Button';
import { useMutation } from '@tanstack/react-query';
import styles from './styles';
import instance from '~Root/config/axios';

export const MyJournalCreateScreen: React.FC = () => {
  const { t } = useTranslation();
  const [journalText, setJournalText] = useState<string>('');

  const mutation = useMutation({
    mutationFn: async (text: string) => {
      return await instance.post('/journal', { text });
    },
  });

  const handleSave = () => {
    mutation.mutate(journalText);
    goBack();
  };

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('my_journal')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[GlobalStyles.ph15, GlobalStyles.mb15]}>
        <FieldInput
          multiline
          label={t('content')}
          style={[GlobalStyles.pv20, styles.contentInput]}
          styleContainer={GlobalStyles.mb20}
          value={journalText}
          onChangeText={setJournalText}
        />
        <PrimaryButton title={t('save')} onPress={handleSave} />
      </ScrollView>
    </SafeAreaLayout>
  );
};
