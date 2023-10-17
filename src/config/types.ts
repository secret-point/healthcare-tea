import { ImageRequireSource } from 'react-native';
import { Source } from 'react-native-fast-image';

export interface IPageLinkItem {
  icon?: Source | ImageRequireSource;
  name: string;
  route?: string;
  queryKey?: string;
}

export interface IPaginate<T> {
  data: T[];
  page: number;
  size: number;
  count: number;
  pages: number;
}
