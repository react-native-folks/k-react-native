import { ReactNode } from 'react';
import { TextProps } from 'react-native';

/*
 ** TODO: You can add styles to Base like Family Font to be the Text styles base!
 ** if you want to add a custom style, you need to add it here and in VARIANTS
 */

export const VARIANTS = [
  'semiBold',
  'bold',
  'italic',
  'center',
  'justify',
  'right',
  'primary',
  'secondary',
  'onPrimary',
  'onSecondary',
  'accent',
  'blue',
  'gray',
  'green',
  'white',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'xmedium',
  'big',
  'xbig',
  'error'
];

export interface VariantsInterface {
  semiBold?: boolean;
  bold?: boolean;
  italic?: boolean;
  center?: boolean;
  justify?: boolean;
  right?: boolean;
  primary?: boolean;
  secondary?: boolean;
  onPrimary?: boolean;
  onSecondary?: boolean;
  accent?: boolean;
  blue?: boolean;
  gray?: boolean;
  green?: boolean;
  white?: boolean;
  xxsmall?: boolean;
  xsmall?: boolean;
  small?: boolean;
  medium?: boolean;
  xmedium?: boolean;
  big?: boolean;
  xbig?: boolean;
  error?: boolean;
}

export interface CustomTextProps extends VariantsInterface {
  testID?: string | undefined;
  children: ReactNode;
  textProps?: TextProps;
  style?: any;
}
