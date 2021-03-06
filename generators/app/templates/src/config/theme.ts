import colors from 'constants/colors';

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native';
import {
  configureFonts,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme
} from 'react-native-paper';
import { fontConfig } from 'config/fonts';
import { ThemeProperty } from 'interfaces/theme';

// App themes related with light and dark mode
export const theme = {
  light: {
    primary: colors.blue,
    secondary: colors.white,
    accent: colors.gray,
    background: colors.lightGray,
    input: colors.black,
    onPrimary: colors.lightGray,
    onSecondary: colors.blue
  },
  dark: {
    primary: colors.blue,
    secondary: colors.darkGray,
    accent: colors.lightGray,
    background: colors.black,
    input: colors.white,
    onPrimary: colors.black,
    onSecondary: colors.lightGray
  },
  fontConfig: configureFonts(fontConfig)
};

const defaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  fonts: theme.fontConfig,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    ...theme.light
  },
  type: ThemeProperty.LIGHT
};
const darkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  fonts: theme.fontConfig,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    ...theme.dark
  },
  type: ThemeProperty.DARK
};

export type CustomThemeType = typeof darkTheme | typeof defaultTheme;

export const AppTheme = {
  defaultTheme,
  darkTheme
};
