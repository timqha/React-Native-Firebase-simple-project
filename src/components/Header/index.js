// @flow

/* REACT */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


/* MODULES */
import { COLORS } from 'src/configs';

/* STYLES */
import styles from './styles';

/* TYPES */
type _t_props = {
  textCenter: string,
  leftIcon?: string,
  rightButton?: string,

  // function
  onPress: () => {}
};

export default (props: _t_props) => {
  const {
    textCenter,
    leftIcon,
    rightButton,
    onPress
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {
          leftIcon
            ? (
              <TouchableOpacity onPress={onPress}>
                <Icon
                  name={leftIcon}
                  size={22}
                  color={COLORS.ICON_HEADER}
                />
              </TouchableOpacity>
            )
            : null
        }
      </View>
      <View style={styles.content}>
        <Text style={styles.centerText}>
          {textCenter}
        </Text>
      </View>
      <View style={styles.content}>
        {
          rightButton
            ? (
              <TouchableOpacity onPress={onPress}>
                <Text style={styles.rightText}>{rightButton}</Text>
              </TouchableOpacity>
            )
            : null
        }
      </View>
    </View>
  );
};
