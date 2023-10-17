import React, { memo } from 'react';
import { FlatList, TouchableOpacity, View, ViewStyle } from 'react-native';

import { GlobalStyles } from '~Root/config/styles';
import { CardImageExploration, Link, Paragraph } from '~Root/components';
import { ColorVariant } from '~Root/components/Paragraph';
import { IContent } from '~Root/services/article/types';
import { useTranslation } from 'react-i18next';

type Props = {
  id: string;
  title: string;
  data: IContent[];
  containerStyle?: ViewStyle;
  onPressItem: (item: IContent) => void;
};

const ContentListSection = memo(
  ({ data, title, containerStyle, onPressItem }: Props) => {
    const { t } = useTranslation();

    const onPress = (item: IContent) => () => {
      onPressItem(item);
    };

    return (
      <View style={[GlobalStyles.flexCol, containerStyle]}>
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.justifyBetween,
            GlobalStyles.mb20,
          ]}>
          <TouchableOpacity>
            <Paragraph textWhite semibold h5 title={title} />
          </TouchableOpacity>
          <Link
            colorVariant={ColorVariant.LINK}
            medium
            p
            title={t('see_all')}
          />
        </View>
        <View>
          <FlatList
            horizontal
            data={data || []}
            renderItem={({ item }) => (
              <CardImageExploration
                {...item}
                styleContainer={GlobalStyles.mr15}
                onPressItem={onPress(item)}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  },
);

export default ContentListSection;
