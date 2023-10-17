import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import Home from '~Root/assets/icons/home.svg';
import Message from '~Root/assets/icons/message.svg';
import Exercise from '~Root/assets/icons/exercise.svg';
import GroupUser from '~Root/assets/icons/group-user.svg';
import Calendar from '~Root/assets/icons/calendar.svg';
import Payment from '~Root/assets/icons/payment.svg';
import Shop from '~Root/assets/icons/shop.svg';

import { AppRoute } from '~Root/navigation/AppRoute';
import { GlobalStyles } from '~Root/config/styles';
import createStyles from './styles';
import { useAppTheme } from '~Root/services/theme/hook';

const TabBar = ({ state, descriptors, navigation }: any) => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View
      style={[
        GlobalStyles.flex,
        GlobalStyles.flexRow,
        GlobalStyles.itemsCenter,
        GlobalStyles.justifyCenter,
        styles.tabContainer,
      ]}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        let Image;
        let iconSize;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        switch (label) {
          case AppRoute.MAIN_NAVIGATOR:
            Image = Home;
            iconSize = GlobalStyles.icon22x22;
            break;
          case AppRoute.MESSAGE:
            Image = Message;
            iconSize = GlobalStyles.icon22x22;
            break;
          case AppRoute.LEARNING_NAVIGATOR:
            Image = Exercise;
            iconSize = GlobalStyles.icon22x22;
            break;
          case AppRoute.CALENDAR_NAVIGATOR:
            Image = Calendar;
            iconSize = GlobalStyles.icon25x25;
            break;
          case AppRoute.PAYMENT:
            Image = Payment;
            iconSize = GlobalStyles.icon25x25;
            break;
          case AppRoute.COMMUNITY:
            Image = GroupUser;
            iconSize = GlobalStyles.icon22x22;
            break;
          case AppRoute.SHOP:
            Image = Shop;
            iconSize = GlobalStyles.icon22x22;
            break;
          default:
            return null;
        }

        return (
          <TouchableOpacity
            key={`tab-${route.key}-${index}`}
            style={[
              GlobalStyles.mh5,
              isFocused ? styles.tabItemActive : styles.tabItem,
            ]}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Image
              primaryColor={
                isFocused ? theme.tabIcon.activeColor : theme.tabIcon.color
              }
              width={iconSize.width}
              height={iconSize.height}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
