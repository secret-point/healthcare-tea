import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { useAuth } from '~Root/services/auth/hook';
import { AppRoute } from '~Root/navigation/AppRoute';
import { BottomTabParamsList } from '~Root/navigation/config';
import MessageScreen from '~Root/screens/Message';
import PaymentScreen from '~Root/screens/Payment';
import CommunityScreen from '~Root/screens/Community';
import TabBar from '~Root/components/Layout/TabBar/TabBar';
import MainRoute from '~Root/routes/main';
import LearningRoute from '~Root/routes/learning';
import CalendarRoute from '~Root/routes/calendar';
import ShopRoute from '~Root/routes/shop';
import ProfileRoute from '~Root/routes/profile';
import { RoleId } from '~Root/services/auth/types';

const Tab = createBottomTabNavigator<BottomTabParamsList>();

const TabRoute = () => {
  const { auth } = useAuth();
  const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        lazy: true,
      }}
      tabBar={renderTabBar}>
      <Tab.Screen name={AppRoute.MAIN_NAVIGATOR} component={MainRoute} />
      <Tab.Screen name={AppRoute.MESSAGE} component={MessageScreen} />
      <Tab.Screen name={AppRoute.PROFILE_NAVIGATOR} component={ProfileRoute} />
      {auth.roleId === RoleId.THERAPIST ? (
        <>
          <Tab.Screen
            name={AppRoute.CALENDAR_NAVIGATOR}
            component={CalendarRoute}
          />
          <Tab.Screen name={AppRoute.PAYMENT} component={PaymentScreen} />
        </>
      ) : (
        <>
          <Tab.Screen
            name={AppRoute.LEARNING_NAVIGATOR}
            component={LearningRoute}
          />
          <Tab.Screen name={AppRoute.COMMUNITY} component={CommunityScreen} />
        </>
      )}
      <Tab.Screen name={AppRoute.SHOP_NAVIGATOR} component={ShopRoute} />
    </Tab.Navigator>
  );
};

export default TabRoute;
