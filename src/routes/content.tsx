import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoute } from '~Root/navigation/AppRoute';
import { ContentNavigatorParamsList } from '~Root/navigation/config';
import ContentScreen from '~Root/screens/Content';
import ContentDetailScreen from '~Root/screens/Content/Detail';
import ContentCreateScreen from '~Root/screens/Content/Create';

const ContentStack = createNativeStackNavigator<ContentNavigatorParamsList>();

const ContentRoute = () => {
  return (
    <ContentStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ContentStack.Screen name={AppRoute.CONTENT} component={ContentScreen} />
      <ContentStack.Screen
        name={AppRoute.CONTENT_DETAIL}
        component={ContentDetailScreen}
      />
      <ContentStack.Screen
        name={AppRoute.CONTENT_CREATE}
        component={ContentCreateScreen}
      />
    </ContentStack.Navigator>
  );
};

export default ContentRoute;
