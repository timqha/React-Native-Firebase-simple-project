// @flow

/* REACT */
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { inject, observer } from 'mobx-react';

/* MODULES */
import { Header, Button, InputText } from 'src/components';

/* CONSTANT */
import { SIGNUP, ERRORS } from 'src/constants/texts';

/* STYLES */
import type { _t_navigation, _t_auth, _t_screenProps } from 'src/types';
import styles from './styles';

type _t_props = {|
  navigation: _t_navigation,
  auth: _t_auth,
  screenProps: _t_screenProps
|};
type _t_state = {
  email: string,
  password: string
};

@inject('auth')
@observer
class Signup extends Component<_t_props, _t_state> {

  goHome = () => {
    const { navigation } = this.props;
    if (navigation) {
      navigation.navigate({
        routeName: "Home",
        key: "Home"
      });
    }
  };

  onChange = (value: string, field: string): void => {
    const { auth } = this.props;
    if (value) {
      auth.setValue({ [field]: value, [`${field}Error`]: '' });
    } else {
      auth.setValue({ [`${field}Error`]: ERRORS.EMPTY_FIELD });
    }
  };

  signUp = async () => {
    const { sdk } = this.props.screenProps;
    const { auth } = this.props;
    const { email, password } = auth;

    try {
      const user = await sdk.auth.signUp({ email, password });
      sdk.user.create({ email, uid: user.uid }, user.uid)
        .then((uid) => {
          auth.setValue({ uid });
          this.goHome();
        })
        // TODO: inform the user
        .catch((err) => { console.warn(err); });

    } catch (err) {
      auth.setValue({ emailError: err.toString() });
    }
  }

  render() {
    const {
      email,
      password,
      emailError,
      passwordError
    } = this.props.auth;

    return (
      <View style={styles.container}>
        <Header textCenter={SIGNUP.HEADER} />
        <View style={styles.content}>
          <View>
            <InputText
              placeholder={SIGNUP.EMAIL}
              iconName="envelope"
              value={email}
              onChangeText={value => this.onChange(value, 'email')}
              textError={emailError}
            />
            <InputText
              placeholder={SIGNUP.PASSWORD}
              isSecureTextEntry
              iconName="lock"
              value={password}
              onChangeText={value => this.onChange(value, 'password')}
              textError={passwordError}
            />
          </View>
          <Button text={SIGNUP.BUTTON_TEXT} onPress={this.signUp} />
        </View>
      </View>
    );
  }
}

export default Signup;
