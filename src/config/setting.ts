import { Language } from '~Root/services/auth/types';

/**
 * Basic Setting Variables Define
 */
export const BASE_SETTINGS = {
  defaultLanguage: Language.EN,
  languageSupport: [Language.EN, Language.TR, Language.AR],
  resourcesLanguage: {
    [Language.EN]: {
      translation: require('../lang/en.json'),
    },
    [Language.TR]: {
      translation: require('../lang/tr.json'),
    },
    [Language.AR]: {
      translation: require('../lang/ar.json'),
    },
  },
};
