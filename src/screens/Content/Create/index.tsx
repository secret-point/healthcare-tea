import React from 'react';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import { Header, DropDown, FieldInput, NoteToolBox } from '~Root/components';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack } from '~Root/navigation';
import { IDataDropDown } from '~Root/utils';
import { PrimaryButton } from '~Root/components/Button';
import { useAppTheme } from '~Root/services/theme/hook';
import FastImage from '~Root/components/FastImage';
import { IMAGES } from '~Root/config';
import Paragraph, { ColorVariant } from '~Root/components/Paragraph';
import styles from './styles';
import ImagePicker from '~Root/components/ImagePicker';
import { Asset } from 'react-native-image-picker';

const MOCK_TYPE_ARTICLE: IDataDropDown[] = [
  { id: 1, name: 'Article' },
  { id: 2, name: 'Long Article' },
];

const ContentCreateScreen = () => {
  const { t } = useTranslation();
  const { globalStyles } = useAppTheme(true);

  const onSelectImage = (image?: Asset) => {
    console.log('Select Image', image);
  };

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('content')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[GlobalStyles.ph15, GlobalStyles.pb15]}>
        <ImagePicker
          containerStyle={[GlobalStyles.mb10, GlobalStyles.selfCenter]}
          onSelectImage={onSelectImage}
        />

        <FieldInput
          label={t('title')}
          style={globalStyles.bgExtra6}
          styleContainer={GlobalStyles.mb10}
        />
        <DropDown
          label={t('type_of_content')}
          data={MOCK_TYPE_ARTICLE}
          onValueChange={item => console.log(item)}
          containerStyle={GlobalStyles.mb10}
          toggleContainerStyle={globalStyles.bgExtra6}
        />
        <View style={[GlobalStyles.flexRow, GlobalStyles.mb10]}>
          <NoteToolBox
            label={t('time')}
            containerStyle={GlobalStyles.container}>
            <View
              style={[
                GlobalStyles.flexRow,
                GlobalStyles.itemsCenter,
                GlobalStyles.gap10,
              ]}>
              <FastImage
                source={IMAGES.clock}
                resizeMode={FastImage.resizeMode.cover}
                style={GlobalStyles.icon14x14}
              />
              <Paragraph
                p
                medium
                colorVariant={ColorVariant.EXTRA4}
                title="21 min"
              />
            </View>
          </NoteToolBox>
          <View style={GlobalStyles.container} />
        </View>

        <FieldInput
          multiline
          label={t('content')}
          style={[globalStyles.bgExtra6, styles.contentInput]}
          styleContainer={GlobalStyles.mb20}
        />

        <PrimaryButton title={t('save')} />
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default ContentCreateScreen;
