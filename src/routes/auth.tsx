import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoute } from '~Root/navigation/AppRoute';
import { AuthNavigatorParamsList } from '~Root/navigation/config';
import InitScreen from '~Root/screens/Auth/Init';
import LoginScreen from '~Root/screens/Auth/Login';
import ForgotPasswordScreen from '~Root/screens/Auth/ForgotPassword';
import RegisterScreen from '~Root/screens/Auth/Register';

import SelectRoleScreen from '~Root/screens/Auth/SelectRole';

import VerificationScreen from '~Root/screens/Auth/Verification';
import VerificationSuccess from '~Root/screens/Auth/VerificationSuccess';
import AuthStaticScreen from '~Root/screens/Auth/Static';
import VerificationRecoveryScreen from '~Root/screens/Auth/VerificationRecovery';

const AuthStack = createNativeStackNavigator<AuthNavigatorParamsList>();

const AuthRoute = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={AppRoute.INIT} component={InitScreen} />
      <AuthStack.Screen
        name={AppRoute.AUTH_STATIC}
        component={AuthStaticScreen}
      />
      <AuthStack.Screen name={AppRoute.LOGIN} component={LoginScreen} />
      <AuthStack.Screen
        name={AppRoute.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
      <AuthStack.Screen
        name={AppRoute.SELECT_ROLE}
        component={SelectRoleScreen}
      />
      <AuthStack.Screen name={AppRoute.REGISTER} component={RegisterScreen} />
      <AuthStack.Screen
        name={AppRoute.VERIFICATION}
        component={VerificationScreen}
      />
      <AuthStack.Screen
        name={AppRoute.VERIFICATION_RECOVERY}
        component={VerificationRecoveryScreen}
      />
      <AuthStack.Screen
        name={AppRoute.VERIFICATION_SUCCESS}
        component={VerificationSuccess}
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoute;
