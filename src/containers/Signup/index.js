// @flow

/* REACT */
import React, { PureComponent } from 'react';
import {
  View,
} from 'react-native';

/* MODULES */
import { Header, Button, InputText } from 'src/components';

/* CONSTANT */
import { SIGNUP } from 'src/constants/texts';

/* STYLES */
import styles from './styles';

/* TYPES */
type _t_props = {};
type _t_state = {
  email: string,
  password: string
};

export default class extends PureComponent<_t_props, _t_state> {

  state = {
    email: '',
    password: '',
  }

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <Header textCenter={SIGNUP.HEADER} />
        <View style={styles.content}>
          <View>
            <InputText
              placeholder={SIGNUP.EMAIL}
              iconName="envelope"
              value={email}
            />
            <InputText
              placeholder={SIGNUP.PASSWORD}
              isSecureTextEntry
              iconName="lock"
              value={password}
            />
          </View>
          <Button text={SIGNUP.BUTTON_TEXT} />
        </View>
      </View>
    );
  }
}
