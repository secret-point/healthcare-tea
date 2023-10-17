import {
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RoleId } from '~Root/services/auth/types';
import { GlobalStyles, IMAGES } from '~Root/config';
import {
  DropDown,
  FieldInputControl,
  Paragraph,
  Header,
  Tag,
} from '~Root/components';
import createStyles from './styles';
import { AppRoute } from '~Root/navigation/AppRoute';
import { ColorVariant } from '~Root/components/Paragraph';
import { useAppTheme } from '~Root/services/theme/hook';
import FieldInput from '~Root/components/Form/FieldInput';
import { PrimaryButton } from '~Root/components/Button';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack } from '~Root/navigation';
import FastImage from '~Root/components/FastImage';
import { usePickImage } from '~Root/config/hooks';
import { useAuth } from '~Root/services/auth/hook';

interface ICategories {
  id: number;
  name: string;
  value?: string;
}

const MOCK_CATEGORIES: ICategories[] = [
  { id: 1, name: 'Meditations' },
  { id: 2, name: 'Mindfulness' },
  { id: 3, name: 'Burnout' },
  { id: 4, name: 'Stress management' },
  { id: 5, name: 'Goal setting' },
  { id: 6, name: 'Goal setting' },
  { id: 7, name: 'Healthy Habits' },
  { id: 8, name: 'Relationships' },
  { id: 9, name: 'Parenting' },
  { id: 10, name: 'Loneliness' },
  { id: 11, name: 'Anxiety Management' },
];

const MOCK_COUNTRIES: ICategories[] = [
  { id: 1, name: 'USA' },
  { id: 2, name: 'USA1' },
  { id: 3, name: 'USA2' },
];

const MOCK_COUNTRIES_DEFAULT: ICategories = {
  id: -1,
  name: 'Select Countries',
};

const MOCK_LANGUAGES: ICategories[] = [
  { id: 1, name: 'English', value: 'en' },
  { id: 2, name: 'Turkish', value: 'tr' },
  { id: 3, name: 'Arabic', value: 'ar' },
];

const MOCK_PRICE = [
  { id: 1, name: 'Audio Call', price: 100 },
  { id: 2, name: 'Video Call', price: 100 },
  { id: 3, name: 'Chat', price: 100 },
];

const schema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  title: yup.string(),
  email: yup.string().email(),
});

const ProfileInfoScreen = ({ navigation }: any) => {
  const { control, setFocus } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { theme } = useAppTheme();
  const styles = createStyles(theme);
  const { auth } = useAuth();
 
  const { t, i18n } = useTranslation();
  const { onPickImage, image } = usePickImage();

  const [description, onDescription] = React.useState('');

  const onSubmitEditing = (key: string) => () => {
    setFocus(key);
  };

  const handleChangeLanguage = (item?: ICategories) => {
    i18n.changeLanguage(item?.value);
  };

  return (
    <SafeAreaLayout edges={['bottom']}>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('account_info')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />

      <KeyboardAvoidingView style={GlobalStyles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={GlobalStyles.ph15}>
          <View style={[GlobalStyles.flexCol, GlobalStyles.mb15]}>
            <TouchableOpacity
              onPress={onPickImage}
              style={GlobalStyles.itemsCenter}>
              <View
                style={[
                  GlobalStyles.itemsCenter,
                  GlobalStyles.justifyCenter,
                  GlobalStyles.mb15,
                  styles.avatarContainer,
                ]}>
                <FastImage
                  source={IMAGES.iconCamera24x24}
                  resizeMode={FastImage.resizeMode.cover}
                  style={[GlobalStyles.icon18x18, styles.iconCamera]}
                />
                <FastImage
                  defaultSource={undefined}
                  resizeMode={FastImage.resizeMode.cover}
                  style={styles.image}
                  source={{ uri: image?.uri }}
                />
              </View>
            </TouchableOpacity>
            <FieldInputControl
              styleContainer={GlobalStyles.mb15}
              label={t('name')}
              control={control}
              name="firstName"
              autoFocus={true}
              onSubmitEditing={onSubmitEditing('lastName')}
            />
            <FieldInputControl
              styleContainer={GlobalStyles.mb15}
              label={t('surname')}
              control={control}
              name="lastName"
              onSubmitEditing={onSubmitEditing('title')}
            />
            <FieldInputControl
              styleContainer={GlobalStyles.mb15}
              label={t('title')}
              control={control}
              name="title"
              onSubmitEditing={onSubmitEditing('email')}
            />
            <FieldInputControl
              styleContainer={GlobalStyles.mb15}
              label={t('email')}
              control={control}
              name="email"
            />
          </View>
          <View style={GlobalStyles.flexCol}>
            <Paragraph
              semibold
              textWhite
              h5
              title={t('others')}
              style={GlobalStyles.mb15}
            />
            <View style={GlobalStyles.flexCol}>
              <Paragraph
                regular
                colorVariant={ColorVariant.EXTRA2}
                p
                title={t('specializations')}
                style={GlobalStyles.mb15}
              />
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                directionalLockEnabled={true}
                alwaysBounceVertical={false}>
                <FlatList
                  style={GlobalStyles.mb15}
                  columnWrapperStyle={GlobalStyles.gap10}
                  contentContainerStyle={[
                    GlobalStyles.gap10,
                    GlobalStyles.selfStart,
                  ]}
                  numColumns={Math.ceil(MOCK_CATEGORIES.length / 4)}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  directionalLockEnabled={true}
                  alwaysBounceVertical={false}
                  data={MOCK_CATEGORIES}
                  keyExtractor={(item, index) => `${index.toString()}`}
                  renderItem={({ item }) => <Tag label={item.name} />}
                />
              </ScrollView>
            </View>
          </View>
          <DropDown
            label={t('country_of')}
            data={MOCK_COUNTRIES}
            onValueChange={item => console.log(item)}
            dataDefault={MOCK_COUNTRIES_DEFAULT}
            containerStyle={GlobalStyles.mb15}
          />
          <DropDown
            label={t('preferred_language')}
            data={MOCK_LANGUAGES}
            onValueChange={(item?: ICategories) => handleChangeLanguage(item)}
            containerStyle={GlobalStyles.mb15}
            dataDefault={MOCK_LANGUAGES.find(
              (item: ICategories) => item.value === i18n.language,
            )}
          />
          <View style={GlobalStyles.flexCol}>
            <Paragraph
              regular
              colorVariant={ColorVariant.EXTRA5}
              p
              title={t('topic_interest')}
              style={GlobalStyles.mb20}
            />
            <Paragraph
              semibold
              textWhite
              h5
              title={t('work_experience')}
              style={GlobalStyles.mb20}
            />
            <View style={[GlobalStyles.flexCol, GlobalStyles.mb15]}>
              <Paragraph
                regular
                colorVariant={ColorVariant.EXTRA2}
                p
                title={t('description')}
                style={GlobalStyles.mb5}
              />
              <FieldInput
                onChangeText={onDescription}
                value={description}
                placeholder={t('description')}
                multiline
                style={[GlobalStyles.pv20, GlobalStyles.ph10, styles.textInput]}
              />
            </View>
            <View style={[GlobalStyles.flexCol, GlobalStyles.mb30]}>
              <Paragraph
                regular
                colorVariant={ColorVariant.EXTRA2}
                p
                title={t('accreditations')}
                style={GlobalStyles.mb5}
              />
              <FieldInput
                onChangeText={onDescription}
                value={description}
                placeholder={t('accreditations')}
                multiline
                style={[
                  GlobalStyles.pv20,
                  GlobalStyles.ph10,
                  styles.textInput2,
                ]}
              />
            </View>
            {auth.roleId === RoleId.THERAPIST && (
              <View style={[GlobalStyles.flexCol, GlobalStyles.mb10]}>
                <Paragraph
                  semibold
                  textWhite
                  h5
                  title={t('price')}
                  style={GlobalStyles.mb20}
                />
                <FlatList
                  data={MOCK_PRICE}
                  renderItem={({ item }) => (
                    <View
                      style={[
                        GlobalStyles.flexRow,
                        GlobalStyles.itemsCenter,
                        GlobalStyles.justifyBetween,
                        GlobalStyles.p10,
                        GlobalStyles.mb10,
                        styles.priceItem,
                      ]}>
                      <Paragraph
                        colorVariant={ColorVariant.EXTRA3}
                        h5
                        medium
                        title={item.name}
                      />
                      <Paragraph
                        colorVariant={ColorVariant.EXTRA4}
                        h5
                        semibold
                        title={`$${item.price} per/session`}
                      />
                    </View>
                  )}
                  keyExtractor={(item, index) =>
                    `${item.id}-${index}.toString()`
                  }
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  keyboardShouldPersistTaps="always"
                />
              </View>
            )}
            <PrimaryButton
              title={t('save')}
              onPress={() => navigation.navigate(AppRoute.THERAPIST_DETAIL)}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaLayout>
  );
};

export default ProfileInfoScreen;
