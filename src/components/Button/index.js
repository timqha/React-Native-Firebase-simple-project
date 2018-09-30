// @flow

/* REACT */
import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

/* STYLES */
import styles from './styles';

/* TYPES */
type _t_props = {
  text: string,
  // functions
  onPress: () => {},
};

export default (props: _t_props) => {

  const { onPress, text } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.textStyle}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
