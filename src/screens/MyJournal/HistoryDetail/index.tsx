import React from 'react';
import { SectionList, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { GlobalStyles } from '~Root/config/styles';
import { Header, Image, Paragraph, SectionHeading } from '~Root/components';
import { MOCK_DATA_JOURNEY_HISTORY } from '~Root/utils';
import styles from './styles';
import { useAppTheme } from '~Root/services/theme/hook';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { ColorVariant } from '~Root/components/Paragraph';
import { goBack } from '~Root/navigation';

type SectionHeaderProps = {
  section: {
    title: string;
  };
};

const SectionHeader = ({ section: { title } }: SectionHeaderProps) => {
  const { globalStyles } = useAppTheme(true);
  const { t } = useTranslation();
  const time = moment(title, 'YYYY-MM-DD HH:mm:ss');
  const isSame = time.isSame(moment(), 'date');

  return (
    <SectionHeading
      title={isSame ? `Today, ${time.format('MMM DD')}` : time.format('MMM DD')}
      linkText={isSame ? t('recently') : null}
      containerStyles={[
        globalStyles.bgPrimary,
        GlobalStyles.pb15,
        GlobalStyles.mb0,
      ]}
    />
  );
};

const MyJourneyHistoryDetailScreen = () => {
  const { t } = useTranslation();
  const { globalStyles } = useAppTheme(true);

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('journey_history')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <SectionList
        style={GlobalStyles.ph15}
        showsVerticalScrollIndicator={false}
        sections={MOCK_DATA_JOURNEY_HISTORY}
        keyExtractor={(item: any, index) =>
          `journey-history-detail-${item?.id + index}`
        }
        renderItem={({ item, index, section: { data } }) => {
          return (
            <View
              style={[
                globalStyles.bgExtra2,
                GlobalStyles.flexRow,
                index === 0 && styles.roundedTop,
                index === data.length - 1 && styles.roundedBottom,
                index === data.length - 1 && GlobalStyles.mb15,
                GlobalStyles.p10,
                GlobalStyles.itemsCenter,
                index !== 0 && styles.items,
              ]}>
              <Image
                source={{ uri: item.image }}
                resizeMode="cover"
                style={[
                  GlobalStyles.icon40x40,
                  GlobalStyles.rounded64,
                  GlobalStyles.mr5,
                ]}
              />
              <Paragraph
                colorVariant={ColorVariant.CONTRAST}
                semibold
                p
                title={item?.title}
                style={GlobalStyles.flexShrink1}
              />
            </View>
          );
        }}
        renderSectionHeader={props => <SectionHeader {...props} />}
      />
    </SafeAreaLayout>
  );
};

export default MyJourneyHistoryDetailScreen;
