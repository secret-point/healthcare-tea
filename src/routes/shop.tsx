import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { AppRoute } from '~Root/navigation/AppRoute';
import {
  BottomTabParamsList,
  ShopNavigatorParamsList,
} from '~Root/navigation/config';
import ShopScreen from '~Root/screens/Shop';
const ShopStack = createNativeStackNavigator<ShopNavigatorParamsList>();

type ShopNavigatorProps = BottomTabScreenProps<
  BottomTabParamsList,
  AppRoute.SHOP_NAVIGATOR
>;

const ShopRoute = (props: ShopNavigatorProps) => {
  return (
    <ShopStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      {...props}>
      <ShopStack.Screen name={AppRoute.SHOP} component={ShopScreen} />
    </ShopStack.Navigator>
  );
};

export default ShopRoute;
