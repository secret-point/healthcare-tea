import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoute } from '~Root/navigation/AppRoute';
import { ProfileNavigatorParamsList } from '~Root/navigation/config';
import ProfileScreen from '~Root/screens/Profile';
import ProfileInfoScreen from '~Root/screens/Profile/Info';
import ProfileSettingsScreen from '~Root/screens/Profile/Settings';
import ProfileAboutScreen from '~Root/screens/Profile/About';
import ProfileAboutContentScreen from '~Root/screens/Profile/About/content';
import ProfileThemeScreen from '~Root/screens/Profile/Settings/Theme';

const ProfileStack = createNativeStackNavigator<ProfileNavigatorParamsList>();

const ProfileRoute = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name={AppRoute.PROFILE} component={ProfileScreen} />
      <ProfileStack.Screen
        name={AppRoute.PROFILE_INFO}
        component={ProfileInfoScreen}
      />
      <ProfileStack.Screen
        name={AppRoute.PROFILE_SETTINGS}
        component={ProfileSettingsScreen}
      />
      <ProfileStack.Screen
        name={AppRoute.PROFILE_THEME}
        component={ProfileThemeScreen}
      />
      <ProfileStack.Screen
        name={AppRoute.PROFILE_ABOUT}
        component={ProfileAboutScreen}
      />
      <ProfileStack.Screen
        name={AppRoute.PROFILE_ABOUT_CONTENT}
        component={ProfileAboutContentScreen}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileRoute;
