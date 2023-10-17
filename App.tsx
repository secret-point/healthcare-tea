import React from 'react';
import { ActivityIndicator, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { store, persistor } from '~Root/store';
import RootRoute from '~Root/routes/root';
import { navigationRef } from '~Root/navigation';
import { queryClientAxios } from '~Root/config/axios';
import { BASE_SETTINGS } from '~Root/config';
// import {
//   Apis,
//   ApiException,
//   ApiClientConfiguration,
//   Contracts,
// } from '~Root/api';
// import '~Root/@fake-api';

LogBox.ignoreAllLogs();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { queryFn: queryClientAxios },
  },
});

const onBeforeLift = () => {};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: BASE_SETTINGS.resourcesLanguage,
  lng: BASE_SETTINGS.defaultLanguage,
  fallbackLng: BASE_SETTINGS.defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  // const test = async () => {
  //   console.log('API TESTING');
  //   // setup api base url - can come from env variables
  //   ApiClientConfiguration.baseUrl = 'http://192.168.1.103:3501/api/v1';
  //
  //   // api call that generates an exception - in this case invalid password
  //   try {
  //     const tokens = await Apis.AuthApi.loginByEmail(
  //       'pacient1@mintea.com',
  //       'wrong-password',
  //     );
  //     console.log('AUTH RESULT', tokens);
  //   } catch (ex: any) {
  //     const error = ex as ApiException;
  //     console.error('LOGIN_ERROR', error.code, error.message);
  //   }
  //
  //   // api call - login with email and password -> on success we set up the accessToken to the api client configuration
  //   // to be added to async storage or something
  //   try {
  //     const tokens = await Apis.AuthApi.loginByEmail(
  //       'pacient1@mintea.com',
  //       '123456',
  //     );
  //     console.log('AUTH RESULT', tokens);
  //
  //     ApiClientConfiguration.getAuthToken = () => {
  //       return tokens.accessToken;
  //     };
  //
  //     // api call - getting the daily quote with the default language
  //     const dailyQuote = await Apis.DailyQuoteApi.getTodaysQuote();
  //     console.log('Daily Quote', dailyQuote.data);
  //
  //     // changing the language, and getting the same daily quote in arabic
  //     ApiClientConfiguration.language = Contracts.Language.ae;
  //     const dailyQuoteArabic = await Apis.DailyQuoteApi.getTodaysQuote();
  //     console.log('Daily Quote (ae)', dailyQuoteArabic.data);
  //   } catch (ex) {
  //     console.error('ERR', ex as ApiException);
  //   }
  // };
  //
  // useEffect(() => {
  //   test();
  // }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate
            loading={<ActivityIndicator />}
            onBeforeLift={onBeforeLift}
            persistor={persistor}>
            <NavigationContainer
              ref={navigationRef}
              fallback={<ActivityIndicator />}
              onReady={() => RNBootSplash.hide()}>
              <RootRoute />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
      <Toast />
    </>
  );
};

export default App;
