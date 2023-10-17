import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import FastImage from '~Root/components/FastImage';

import { GlobalStyles, IMAGES } from '~Root/config';
import { Paragraph } from '~Root/components';
import createStyles from './styles';
import { ColorVariant } from '~Root/components/Paragraph';
import { useAppTheme } from '~Root/services/theme/hook';
import { navigate } from '~Root/navigation';
import { AppRoute } from '~Root/navigation/AppRoute';
import { useAuth } from '~Root/services/auth/hook';

type Props = {
  onBackPress?: () => void;
};

const MainHeader = ({ onBackPress }: Props) => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();

  const { auth } = useAuth();

  const goToProfile = () => {
    navigate(AppRoute.PROFILE_NAVIGATOR, {
      screen: AppRoute.PROFILE,
    });
  };

  return (
    <View>
      {onBackPress && (
        <TouchableOpacity
          onPress={onBackPress}
          style={[GlobalStyles.mb10, styles.buttonBack]}>
          <FastImage
            source={IMAGES.iconBack24x24}
            resizeMode={FastImage.resizeMode.contain}
            style={GlobalStyles.icon24x24}
          />
        </TouchableOpacity>
      )}
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.justifyBetween,
          GlobalStyles.mb20,
        ]}>
        <View style={[GlobalStyles.flexCol]}>
          <Paragraph
            colorVariant={ColorVariant.HINT}
            medium
            p
            title={`${t('good_morning')},`}
          />
          <Paragraph textWhite semibold h5 title={auth.fullName} />
        </View>
        <View style={[GlobalStyles.flexRow, GlobalStyles.itemsCenter]}>
          <View style={[GlobalStyles.flexCol, GlobalStyles.mr20]}>
            <View style={[GlobalStyles.selfEnd, styles.numberContainer]}>
              <View
                style={[
                  GlobalStyles.icon16x16,
                  GlobalStyles.itemsCenter,
                  GlobalStyles.justifyCenter,
                  styles.numberBg,
                ]}>
                <Paragraph textWhite medium h6 title="2" />
              </View>
            </View>
            <FastImage
              source={IMAGES.iconBell24x24}
              resizeMode={FastImage.resizeMode.cover}
              style={GlobalStyles.icon24x24}
            />
          </View>
          <TouchableOpacity
            onPress={goToProfile}
            style={[
              GlobalStyles.bgWhite,
              GlobalStyles.itemsCenter,
              GlobalStyles.justifyCenter,
              GlobalStyles.icon32x32,
              GlobalStyles.rounded64,
            ]}>
            <FastImage
              source={{ uri: auth.avatar }}
              resizeMode={FastImage.resizeMode.cover}
              style={[GlobalStyles.icon30x30, GlobalStyles.rounded64]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainHeader;
