import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { useAppSelector } from '~Root/config/hooks';
import { selectThemeState, themeActions } from '~Root/services/theme/slice';
import { COLORS, THEME } from '~Root/services/theme/colors';
import { createStyles } from '~Root/services/theme/styles';
import { ITheme } from '~Root/services/theme/types';

type ReturnTypeStyles<T extends boolean> = T extends true
  ? ReturnType<typeof createStyles>
  : null;

type AppThemeReturn<T extends boolean> = {
  type: THEME;
  theme: ITheme;
  changeTheme: (payload: THEME) => void;
  globalStyles: ReturnTypeStyles<T>;
};

export const useAppTheme = <T extends boolean = false>(
  withStyle?: T,
): AppThemeReturn<T> => {
  const dispatch = useDispatch();
  const { type } = useAppSelector(selectThemeState);

  const changeTheme = (payload: THEME) => {
    dispatch(themeActions.changeTheme(payload));
  };

  const theme = useMemo(() => COLORS[type], [type]);
  const globalStyles = (
    withStyle ? createStyles(theme) : null
  ) as ReturnTypeStyles<T>;

  return {
    type,
    theme,
    changeTheme,
    globalStyles,
  };
};
