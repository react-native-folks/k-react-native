import React from 'react';
import { NativeModules, TouchableOpacityProps } from 'react-native';
import Config from 'react-native-config';
import { Button as CustomButton } from 'app/components';
import { socialNetworks } from 'interfaces/socials';

import Button from '../Button';

import styles from './styles';

const { RNTwitterSignIn } = NativeModules;

RNTwitterSignIn.init(Config.TWITTER_KEY, Config.TWITTER_SECRET_KEY);

interface TwitterResponse {
  authToken?: string;
  authTokenSecret?: string;
  email?: string;
  name?: string;
  userID?: string;
  userName?: string;
}

// Custom Twitter button Manager using the Twitter API provided
const TwitterLoginManager = async (
  onSuccess: (token: string) => void,
  onError: (error: any) => void
) => {
  RNTwitterSignIn.logIn()
    .then((loginData: TwitterResponse) => {
      const { authToken, authTokenSecret } = loginData;
      if (authToken && authTokenSecret) {
        onSuccess(authToken);
      } else {
        onError('Login Error');
      }
    })
    .catch((error: any) => {
      console.log(error);
    });
};

// False Native Twitter button
const NativeTwitterButton = ({ onPress, ...buttonProps }: any) => {
  return (
    <CustomButton
      blue
      style={styles.button}
      onPress={onPress}
      title="Login with Twitter"
      {...buttonProps}
    />
  );
};

interface TwitterButtonProps {
  onSuccess: (token: string) => void;
  onError: (error: any) => void;
  useNativeButton?: boolean;
  buttonProps?: TouchableOpacityProps;
}

// Exported custom component for use native or custom Twitter login button
// * onSucces: callback to get current user access token
// * onError: callback that return a string with error message o null in case of canlleded state to add custom behaviour
const TwitterButton = ({
  onSuccess,
  onError,
  useNativeButton,
  buttonProps
}: TwitterButtonProps) => {
  const onPress = () => TwitterLoginManager(onSuccess, onError);
  return !useNativeButton ? (
    <Button onPress={onPress} social={socialNetworks.TWITTER} />
  ) : (
    <NativeTwitterButton onPress={onPress} {...buttonProps} />
  );
};

export default TwitterButton;
