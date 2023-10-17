import React, { memo } from 'react';
import { FlatList, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import { CardImageExploration, Link, Paragraph } from '~Root/components';
import { ColorVariant } from '~Root/components/Paragraph';
import { IArticle } from '~Root/services/article/types';

export const articles: IArticle[] = [
  {
    id: 1,
    title: 'Daily Meditation for positive energy',
    image:
      'https://images.unsplash.com/photo-1602677416425-c84311bd217c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    content:
      '<p>Duis congue est nunc, id<img src="https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ"/> efficitur metus scelerisque eget. Suspendisse consectetur magna ut hendrerit sagittis. Nunc eget dictum tellus. Vivamus lobortis nulla nec lectus blandit, vel molestie mauris vestibulum. Praesent sit amet felis auctor, semper nisi ultrices, consequat libero. Curabitur in accumsan diam. Praesent lacus turpis, dignissim pretium tellus et, porttitor varius lectus. Nulla id malesuada felis. Praesent luctus eleifend ante et dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed scelerisque feugiat nulla, sit amet fringilla ligula condimentum ut. Nulla facilisi. Donec varius nunc sed erat auctor, vel pharetra massa euismod. Mauris lacinia eros et ligula molestie, a tempor risus pellentesque. Cras facilisis nulla quis tellus volutpat, eu molestie lorem eleifend. Nam dictum risus at massa tristique laoreet.\n      Aenean elementum fermentum scelerisque. Cras mollis elit sit amet nunc rutrum, quis tincidunt velit dignissim. Sed malesuada, libero nec ullamcorper volutpat, sem sapien egestas tellus, euismod accumsan lectus quam non neque. Nullam interdum dui pharetra ipsum fringilla, nec dapibus eros imperdiet. Nunc non pharetra libero, ut porttitor dolor. Etiam auctor risus orci, sit amet condimentum dolor fringilla vitae. Maecenas congue, mauris at tristique convallis, neque arcu iaculis leo, eget blandit nibh lorem ac leo. Phasellus sagittis tristique laoreet. Nulla facilisi. Praesent venenatis, mi eu sollicitudin auctor, odio urna maximus nulla, in pharetra nisi nisi sit amet justo. Quisque scelerisque in est at ultrices. Proin sem libero, porta eu vestibulum quis, dignissim sed ex. Vivamus velit risus, ullamcorper at dui ac, eleifend lacinia tellus. Praesent facilisis neque quis eros feugiat volutpat. Suspendisse vitae faucibus odio. Nulla facilisi.</p>',
  },
  {
    id: 2,
    title: '10 minutes Mindfulness Meditation',
    image:
      'https://images.unsplash.com/photo-1602677416425-c84311bd217c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    video: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  },
  {
    id: 3,
    title: 'Daily Meditation before sleep',
    image:
      'https://images.unsplash.com/photo-1613397180054-3620774a69f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    video: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
];

type Props = {
  title: string;
  containerStyle?: ViewStyle;
  onPressItem: (item: IArticle) => void;
};

const ExerciseListSection = memo(
  ({ title, containerStyle, onPressItem }: Props) => {
    const { t } = useTranslation();

    const onPress = (item: IArticle) => () => {
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
            data={articles}
            renderItem={({ item }) => (
              <CardImageExploration
                {...item}
                styleContainer={GlobalStyles.mr15}
                onPressItem={onPress(item)}
              />
            )}
            keyExtractor={(item, index) => `${index.toString()}`}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  },
);

export default ExerciseListSection;
