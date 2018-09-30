// @flow

/* REACT */
import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

/* CONFIGS */
import { COLORS } from 'src/configs';

/* STYLES */
import styles from './styles';

/* TYPES */
type _t_props = {
  value: string,
  placeholder: string,
  textError?: string,
  isSecureTextEntry?: boolean,
  iconName: string,
  // function
  onChangeText: () => {}

};

type _t_state = {|
  secureTextEntry: boolean
|};

export default class extends Component<_t_props, _t_state> {
  state = {
    secureTextEntry: true
  }

  onChangeVisible = () => {
    this.setState((prev: _t_state) => ({
      secureTextEntry: !prev.secureTextEntry
    }));
  }

  render() {

    const {
      value,
      textError,
      onChangeText,
      placeholder,
      isSecureTextEntry,
      iconName
    } = this.props;

    const { secureTextEntry } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.iconIndentation}>
          <Icon
            name={iconName}
            size={25}
            color={textError ? COLORS.ERROR : COLORS.ICON}
          />
        </View>
        <View style={styles.flex}>
          {
            textError
              ? (
                <Text style={styles.errorText}>{textError}</Text>
              )
              : null
          }
          <TextInput
            style={[styles.textinput, textError && styles.isError]}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={COLORS.PLACEHOLDER}
            secureTextEntry={isSecureTextEntry && secureTextEntry}
            underlineColorAndroid="transparent"
          />
        </View>
        {
          isSecureTextEntry
            ? (
              <TouchableOpacity
                style={styles.containerIcon}
                onPress={this.onChangeVisible}
              >
                <View>
                  <Icon
                    name={secureTextEntry ? "question" : "eye"}
                    size={18}
                    color={COLORS.ICON}
                  />
                </View>
              </TouchableOpacity>
            )
            : null
        }
      </View>
    );
  }
}
