import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { ICountry } from '~Root/utils/countries';
import { ColorVariant } from '~Root/components/Paragraph';
import { ReactElement } from 'react';

export const formatNumber = (value = 0) => value.toLocaleString(); // consider change to zero

export const MODAL_SIZE = 300;

export interface IItemMeasure {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class ErrorResponse<T extends object = {}> {
  public code: string;
  public message: string;
  public status: number;
  public payload?: T;

  constructor(response: any) {
    this.code = response.code;
    this.message = response.message;
    this.status = response.status;
    this.payload = response.payload;
  }
}

export async function onLayoutToggle(
  ref: React.RefObject<View>,
  callback: (measure: IItemMeasure) => void,
) {
  if (ref) {
    ref.current?.measure(
      (
        x: number,
        y: number,
        width: number,
        height: number,
        px: number,
        py: number,
      ) => {
        const measure = { x: px, y: py, width, height };
        callback(measure);
      },
    );
  }
}

export function sortData(countries: Array<ICountry>, searchValue: string) {
  return countries.sort((a, b) =>
    searchValue
      ? a.name.toLowerCase() < b.name.toLowerCase()
        ? -1
        : a.name.toLowerCase().startsWith(searchValue.toLowerCase())
        ? -1
        : a.name.toLowerCase() === searchValue.toLowerCase()
        ? -1
        : a.alpha2Code.toLowerCase() === searchValue.toLowerCase()
        ? -1
        : a.callingCode === searchValue
        ? -1
        : 1
      : a.name.toLowerCase() < b.name.toLowerCase()
      ? -1
      : 0,
  );
}

export interface ICallingCodePickerProps {
  label?: string | null;
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * the ISO 3166-1 alpha-2 code (FR, US, CA) of the country that you would like to show initially.
   */
  initialCountryCode?: string;
  /**
   * Callback for when a country is selected.
   */
  onValueChange: (selectedCountry?: ICountry | undefined) => void;
  /**
   * Style to apply to the toggle container.
   */
  toggleContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Style to apply to the list container.
   */
  listContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Style to apply to the search input.
   */
  searchInputStyle?: StyleProp<TextStyle>;
  /**
   * Style to apply to the FlatList component.
   */
  listStyle?: StyleProp<ViewStyle>;
  /**
   * Style to apply to container.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Visibility of flag component
   */
  isFlagVisible?: boolean;
}

export interface IPickerItemProps {
  country: ICountry;
  onCountrySelect: (selectedCountry: ICountry) => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export interface IPickerToggleProps {
  selectedCode?: string;
  flag?: any;
  isPickerOpen: boolean;
  onPickerToggle: (state: boolean) => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onLayout?: (measure: IItemMeasure) => void;
  countryName?: string;
  isFlagVisible?: boolean;
}

export interface ISearchProps {
  value?: string;
  onChangeText: (text: string) => void;
  onClearInput: () => void;
  inputStyle?: StyleProp<TextStyle>;
}

export interface ISearchPropsExtends {
  onFocus?: () => void;
  onBlur?: () => void;
  flag?: any;
}

export const replacePhoneToAsterisk = (text: string) => {
  return (
    text.substring(0, 5) +
    text.substring(5, 8).replace(/[0-9]/g, '*') +
    text.substring(8, text.length)
  );
};

export interface IDataDropDown {
  id: number | string;
  name: string;
}
export interface IDropDownProps<T extends IDataDropDown> {
  label?: string | null;
  data: T[];
  labelColor?: ColorVariant;
  dataDefault?: T;
  customSelectedItem?: (item?: T) => ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Callback for when a country is selected.
   * @param `callingCode`: the calling code of the selected country
   */
  onValueChange: (item?: T) => void;
  /**
   * Style to apply to the toggle container.
   */
  toggleContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Style to apply to the picker toggle label.
   */
  toggleLabelStyle?: StyleProp<TextStyle>;
  /**
   * Style to apply to the list container.
   */
  listContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Style to apply to the FlatList component.
   */
  listStyle?: StyleProp<ViewStyle>;
  /**
   * Style to apply to each of the item container.
   */
  pickerItemContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Style to apply to container.
   */
  style?: StyleProp<ViewStyle>;
}
export interface IPickerDropDownProps<T extends IDataDropDown> {
  isPickerOpen: boolean;
  customSelectedItem?: (item?: T) => ReactElement;
  onPickerToggle: (state: boolean) => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onLayout: (measure: IItemMeasure) => void;
  selected?: T;
}

export interface IDropDownItemProps<T extends IDataDropDown> {
  item: T;
  onSelect: (selected: T) => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export const AVATAR = 'https://unsplash.it/400/400?image=1';

export const MOCK_FEELING = [
  { title: 'Sad', number: 15 },
  { title: 'Afraid', number: 10 },
  { title: 'Angry', number: 25 },
  { title: 'Average', number: 30 },
  { title: 'Calm', number: 70 },
  { title: 'Happy', number: 90 },
];

export const MOCK_LEARNING = [
  {
    title: 'Exercise Room',
    uri: 'https://s3-alpha-sig.figma.com/img/3ed2/746f/52b03c09c1d6914900478619bc0e858f?Expires=1681084800&Signature=HWr-oJlR6JqqHt8bC1Xvfz5GdUIFXX9KqwHwDlSqIEdhXWDwEnMQCi4aIJfbo-nqgLyafsdoU3b1uaUoug~zqtusIiTod6KdzSa8D8YR23MhGYvrxlKuqVTR3wJ9SZoAIs4HsG4-EPjEcUMaaikeul8VGj1rjXluVIYui5uDdceAcf2yInkXjPKGCnkLKVvw1iZpg2cXwCRN1thN3i3AcAsZpGrpqxLeEXv9JH0n4hwOPEpcirRu9LhtVtQjPaleXjR0RoZFT5H9NfKvGx5X4cmqhaVEJ9z7glqnVSgWhppIpKCEfsj-JKILhrdrh-tACJmSAQR7gXNlxnp2V04aiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
  {
    title: 'Exploration Space',
    uri: 'https://s3-alpha-sig.figma.com/img/279d/653d/b3610323306f1e2eeec37c179b30e605?Expires=1681084800&Signature=C4hPhhyip6Pi2b145k8JTjsMa8XVqYEpA9smAUy4TtiOlTAQILejuNSRsBuTJ1Bh3mZcZqe3Ao69n6cqoirSg64YXw3kloOViV7LhY4zh68hJdaXYlMIxjgGlPG5LBBjHVIIOrNxtLrQWx5KddvevwCpFt1i0rI1uh6E-loYhfiddGzI5Ny07dsBtmCYA5fvLHUuoTED2xg7dLAUOSM6JpSyHmJAejLv8lJgtfoLp8BqoG06aQBXsIvuM7K9RmNwkA6eT9Tn3XKSIcgS2aanedq1hrUPhW9fL7rmjQAoVR~mRE2LO-4SCJCc8L7CDbWZY9N5oUHaOLLAS3JlDdaK9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
  {
    title: 'My Safe Space',
    uri: 'https://s3-alpha-sig.figma.com/img/e947/ee09/4dde5bfe98ff1fc166714151121fdee2?Expires=1681084800&Signature=D7Ksx~JARCcMRm9F2Vprb97d-bYxyETlgNBUNHCIfanJY9kYFBKEnFZ7RiwE1fN5Dt2Dy~0qbAgJelO3cooOZGQG~w5lD0v9XNHGJcHDm-MHOTlTxrshF4B1gJh7Zs8XcwEl9xXYretiQ3AhUXWAdMI3tImvL90OVKeQBMOmMj18pMR3km7Sy64X8gPuZrHXpN1kDObPiIDef28otIrQPZGoFM64DtcA9rBcAi3Sou77k9oqBYo0s519iEsrkHbsOvo7H4AFdcFdnBTG4YMY3CYOaNPmxFiLgd05kWaKAEQtL9avPnqR5ZMiaEM~e9coMnpNDO~K7OvVGyRU2Ztqcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
];

export const MOCK_SUPPORT_GROUPS =
  'https://s3-alpha-sig.figma.com/img/0edf/7c30/fb398e1be42127bd06a243c22ce3c363?Expires=1681084800&Signature=HdLW2QfzHmtK8AKUp9V8rIweK8YEkdftvICtqusH29jSYiTX-JxRNeYHwhhYeCxeYG7GZQhEq1f5REa8C~liPDvDszy24nUdBzeCH~eFbr498-gCEiDC7SHWPrcXUDwoFeZLnyi7sdPYGMDe~ANmbFqYZDoTqWKKuuO3Zpn5D9C6GD1O3YkKwHp2oSkUJcIf8CBvwlMi4HvkUXl0RAFS3G93Xk3g0s-uft3hWlr6uaJE7Gl4O0JfV-DsUWHSy06yAfukxlgMK~UbKYZdC7WXErrQ7dNf2E1Zs6yrFm-U57rLQFelb1Mpdpm~ic0a0QtIFqUeG-49bdSBDTDVml2wXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

export const MOCK_SUPPORT_GROUPS_LIST_IMAGE = [
  'https://s3-alpha-sig.figma.com/img/b5fc/ab22/6f5ded88606a0b51f545ab8a1eed1ecf?Expires=1681084800&Signature=pQNx7zXrbkPd6TI--u2IQp1B9TZ9TE7Qv5yzv~FNz~6cW1fbfhvHUny-7hh-eekFTW2f7MoOUDY-QF4oNO5rIIHHTpL1Wv~1EM2LbMNknv4NqepuROEud4t-2bsewlGbqM6uy-pkqcqwP~DPpwFFwfSn429fdIn3B~RVrYnW~eaxeWM8BUncgUX-Mks25~DQKtUItQy~bDe7psY-FzjYAqQH0wOlTfruwEOlt1hmIneJfIWERPSenOUWR5AM0gBL3gnP~7~yOafEsDV6ZqSGI0Ja04SxCf1D7TW15l6cULlvxop9cA8t2iqhYYxm5MLhlRPwQRQpdeFZwPDE~Zlydw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/75ac/0274/86f406611f947879aa4631abeb39d24d?Expires=1681084800&Signature=fOkY2~qTWT7HcGYryqofBmI534YnAYwROvBZSN2qruxZuHVWJdWf3DZxSQu6x6EU6HwxLXNwZuXh7g3uzogPlMbVYUNcbQBwXnzoTpA3FriNWk6H69vmLSbIty8pOJ9W-iIv0EEl2sP2~HsvcI1jP7g-Ry-7wMuem4Ic3n6SOLOcgl6j-Jv3atmrCvqEkvfuemW6XAEcc97nDKV8aO30AdumAXqlGP2bzo0WOX2zwwHm-VyI6S46AOGkfijX5RIfnuFhfukrIsGAWlcgi5ihDUwz8r93S-gBk2S7aT3ejd~tcvbkMYaD1PwapMRqQzmcri8s9LLEfbVnbQJ2HZSPfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/d12e/9615/ecab82b9086a23fd4a3592d389199861?Expires=1681084800&Signature=GP5PN3PL4bkNWMWG4UEJOqLjxJPVU2Ic7Tfr0ZfmecpJmNMDKMuhRGAjENeUnGsiwrodF6XcMYxYB03TnD0MbJ2eNUAsuOc0Eff4rVA-trUU45cFvNtA49saCZ-G7MNxUymesTTP-dlKS-09yIM8mDYRIsCjZi4l7lh0ER8qz4QnDQ~FUqBgCkqjJBw87nwR3nV6FoHn-KS27AQq3TdCZYO5dq7VLnnnQO8Wwq5OiDvHMlw~foVRvTS7iNzh7O8xrO~WSKIOymWg8OKoxiNjMajJeUX81mV7brRvxw2ZGP~noY-41f0-18j2VsTWYSoPyHQ4nqI07wZuHp5x~yh0yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/aad0/3b0b/7815cc8817185ea67ace97165a2adcb9?Expires=1681084800&Signature=H4m5v35G0KO-K5CZsveqiMe3YvqgWzBmQbJn4c5q3YFB~E71PlCx0qwrsN85eIAMCSy3~bLnaSsEOAjIOXXVH-7b0g-zr8GeijO6sO960iTfq9grTS9Poh0QB9t4SC8rJgCW2RuHY3NA7uRgM7rZ7rHUCmMaShBT2-WZpaUuc4dNFC9zIkic9UZ7r6uZ4fk-YWkcAwi-5LeqIFUJS277DQHzMuffrENFYv5o-Suo8ggSgH~mqtBeQVPPcaOVtv2FXe~wxBuDQemH4f2EXMlG1t3vXcuAKkSpBfiLaQXam6ccMBT4n5t7zVBiYNcHl8H9i7WaymihK91pSRBsGTrFGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
];

export const MOCK_DATA_ANXIETY = [
  {
    id: 1,
    title: 'Understanding anxiety disorder',
    minute: 21,
    image:
      'https://s3-alpha-sig.figma.com/img/1846/aba7/9895445212a2c8d4f8b688ce7feb9caf?Expires=1681084800&Signature=MhS3G~itoC6qVMfHANeZ6XSaJx6QpuN3jcjOqrDHOsZoGAxiGeqPRv9lZCv8HTZ5KxHXcrXKV~mSLO0L8Sy9LcJ2MJJ~5xbu-t1Fao2IE~5W65L0qJWxHiLBTScnahIS4TGl-Ww4bPmwAWmp93KMCEPoMZLuxntahw6-Ze5ECfcgRnuEi5FBLMOclugJuzimtxgbemf56fEJntaIyyo~B2T53ZrImQV0CEijmU-IXU1UEjFFYzI~xjTtpSx4R4icPefTHMaAkEGq13hPrp5Ov~w3BnpvJZXqgobVFwuTD8UX-yNJIi-bo1ldIAfcO-yKhQYlDaJukBH0HU8r~-5b1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    tag: 'Article',
  },
  {
    id: 2,
    title: 'Calming anxiety',
    minute: 30,
    image:
      'https://s3-alpha-sig.figma.com/img/4a0c/9687/26c79d973b7b085609cfcc20aec0c53d?Expires=1681084800&Signature=AU7E8CkQ28jYDAlgYlkSyMMKSGunwSACkT4YzVdMYYBa2k-Xkep2j3ayOzQEkJLygxVbkJmWPcpJz~0zi~ZDXOcdPm29371VqsVrcicEpXzm6FTYWEo7iwjiwOymA-H85K~h-7Q~ntSbN6pXiYNH0sIhICgPiveBShU~wWaLa88HOaKoDiXlwiFRgI82HecUACRreyRBK~EzS~ewy8D2MszDT73K75g3EkKSdj5BXq7I0ohv2ycHBVnzpTmzeoeMgR0-R6AB-8zTwPySaR14JlGcmZSCqpiriONun143Ko5bM8Pv7j24zClDujMdYltxfo8YdXA~9XvmyHSSlxZ51Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    tag: 'Podcast',
  },
  {
    id: 3,
    title: 'Meditation for anxiety',
    minute: 10,
    image:
      'https://www.figma.com/file/FmFF43r3utXazAiq6Edfvy/image/1fe5b8572de3b6aa702aafbb93f81ec2cd6fb7a2?fuid=1218509249844947245',
    tag: 'Meditation',
  },
];

export const MOCK_DATA_PARENTING = [
  {
    id: 1,
    title: 'What to say instead of “NO!”',
    minute: 15,
    image:
      'https://www.figma.com/file/FmFF43r3utXazAiq6Edfvy/image/d40d884dbf1e078e78537c32f51b26c7d74dc525?fuid=1218509249844947245',
    tag: 'Educational',
  },
  {
    id: 2,
    title: 'Toddler approved',
    minute: 0,
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
    tag: 'Blog',
  },
  {
    id: 3,
    title: 'Parenting beyond discipline',
    minute: 10,
    image:
      'https://images.unsplash.com/photo-1471342051519-9621d25323fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tag: 'Podcast',
  },
];

export const MOCK_DATA_HEALTHY = [
  {
    id: 1,
    title: "Building Healthy Habits When You're Truly Exhausted",
    minute: 27,
    image:
      'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tag: 'Article',
  },
  {
    id: 2,
    title: 'Healthy Habits for life',
    minute: 16,
    image:
      'https://images.unsplash.com/photo-1586380951230-e6703d9f6833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    tag: 'Podcast',
  },
  {
    id: 3,
    title: 'Meditation to Boost Health and Well-Being',
    minute: 10,
    image:
      'https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tag: 'Meditation',
  },
];

export const MOCK_DATA_RLATIONSHIPS = [
  {
    id: 1,
    title: 'Business to business relationships',
    minute: 16,
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    tag: 'Podcast',
  },
  {
    id: 2,
    title: 'How to Enhance Your Relationship With Your Parents',
    minute: 35,
    image:
      'https://s3-alpha-sig.figma.com/img/c611/cb9b/815521bfec32c51013e1ccb62fb57b48?Expires=1681084800&Signature=HnXHwD3zLma1nqHuKJpgjNXtvIfyrxH9Jj~m-B8Qu1hEMS2TKgu-GIX9BeBb0lIv7InSkiTVn4qJAtO7k7ch4nzwmYmpF~mvwCMc3wfrXWBJ0rkyIlOUmpL~PsXt7YtIYvBIJbHBei4t0h8o0PugaQzFHSBzQW68aXEMKfDH5TG5vs1pZi9NijzK09myZnoxfimVRRhVySeeQloYuGhI01c0c45NpdANMm3v5RVrK0kKw8p-iTVt23U9oGU95Ysq1OGOXKRX8nCxBsZKGtHDELlaLruTJWHeIzBoYQvlp6Ej1snCTuqJqyU3DqLq3FS8WL3pv6xdVyUUQTqz0mwaeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    tag: 'Educational',
  },
  {
    id: 3,
    title: 'Relationship Harmonizing - Partner Meditation',
    minute: 10,
    image:
      'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tag: 'Meditation',
  },
];

export const MOCK_DATA_JOURNAL = [
  {
    id: 1,
    title: 'At vero eos et accusamus et iusto odio dign accusamus ero eos et',
    time: '14:35',
  },
  {
    id: 2,
    title: 'At vero eos et accusamus et iusto odio dign accusamus ero eos et',
    time: 'Yesterday',
  },
  {
    id: 3,
    title: 'At vero eos et accusamus et iusto odio dign accusamus ero eos et',
    time: '31 July',
  },
  {
    id: 4,
    title: 'At vero eos et accusamus et iusto odio dign accusamus ero eos et',
    time: '28 July',
  },
  {
    id: 5,
    title: 'At vero eos et accusamus et iusto odio dign accusamus ero eos et',
    time: '15 July',
  },
  {
    id: 6,
    title: 'At vero eos et accusamus et iusto odio dign accusamus ero eos et',
    time: '3 July',
  },
];

export const MOCK_DATA_JOURNEY_HISTORY = [
  {
    id: 1,
    title: '2023-04-13 09:23:31',
    data: [
      {
        title: 'Self-esteem test - Test',
        image:
          'https://images.unsplash.com/photo-1587279763527-f245f7ccf7bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3001&q=80',
      },
      {
        title: 'Calming Anxiety - Podcast',
        image:
          'https://images.unsplash.com/35/JOd4DPGLThifgf38Lpgj_IMG.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      },
      {
        title: 'Daily Meditation for positive energy - Daily Meditation',
        image:
          'https://images.unsplash.com/photo-1602677416425-c84311bd217c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
      {
        title: 'Healthy Habits for life - Podcast',
        image:
          'https://images.unsplash.com/photo-1586380951230-e6703d9f6833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
    ],
  },
  {
    id: 2,
    title: '2023-02-20 09:23:31',
    data: [
      {
        title: 'Self-esteem test - Test',
        image:
          'https://images.unsplash.com/photo-1587279763527-f245f7ccf7bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3001&q=80',
      },
      {
        title: 'Calming Anxiety - Podcast',
        image:
          'https://images.unsplash.com/35/JOd4DPGLThifgf38Lpgj_IMG.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      },
      {
        title: 'Daily Meditation for positive energy - Daily Meditation',
        image:
          'https://images.unsplash.com/photo-1602677416425-c84311bd217c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
      {
        title: 'Healthy Habits for life - Podcast',
        image:
          'https://images.unsplash.com/photo-1586380951230-e6703d9f6833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
    ],
  },
  {
    id: 3,
    title: '2023-10-13 09:23:31',
    data: [
      {
        title: 'Self-esteem test - Test',
        image:
          'https://images.unsplash.com/photo-1587279763527-f245f7ccf7bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3001&q=80',
      },
      {
        title: 'Calming Anxiety - Podcast',
        image:
          'https://images.unsplash.com/35/JOd4DPGLThifgf38Lpgj_IMG.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      },
      {
        title: 'Daily Meditation for positive energy - Daily Meditation',
        image:
          'https://images.unsplash.com/photo-1602677416425-c84311bd217c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
      {
        title: 'Healthy Habits for life - Podcast',
        image:
          'https://images.unsplash.com/photo-1586380951230-e6703d9f6833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
    ],
  },
];

export const MOCK_DATA_SHOP_RECOMMENDED = [
  {
    id: 1,
    title: 'Creating a better relationship with food',
    price: 15,
    salePrice: 15,
    image: '',
    rating: 4.5,
    author: 'Diana Slavcheva',
    category: 'Courses',
  },
  {
    id: 2,
    title: 'The Little Book of Yoga: Harness the ancient ...',
    price: 15,
    salePrice: 11,
    image: '',
    rating: 4.5,
    author: 'Lucy Lucas',
    category: 'Books',
  },
  {
    id: 3,
    title: 'Mindfulness A Practical Guide to ...',
    price: 17.99,
    salePrice: 17.99,
    image: '',
    rating: 4.0,
    author: 'Joseph Goldstein',
    category: 'Books',
  },
  {
    id: 4,
    title: 'The Complete Stress Management Tools to ...',
    price: 10,
    salePrice: 10,
    image: '',
    author: 'Jason Lee',
    category: 'Courses',
  },
];
export const MOCK_CONTENT_IMAGE_URL =
  'https://images.unsplash.com/photo-1602677416425-c84311bd217c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

export const ANXIETY_ASSESSMENT_QUESTIONS = [
  '',
  'feeling_nervous_anxious_edge',
  'not_able_to_stop_control_worrying',
  'worrying_too_much',
  'trouble_relaxing',
  'being_so_restless',
  'being_easily_annoyed_irritable',
  'feeling_afraid',
  'how_difficult_have_problems_work_take_care_of_things',
];

export const ANXIETY_ASSESSMENT_QESTUION_OPTIONS = [
  'not_at_all',
  'Somewhat difficult',
  'Very difficult',
  'Extremely difficult',
];
