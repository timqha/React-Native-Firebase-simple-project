// @flow

/* REACT */
import React from 'react';
import {
  View,
  Text,
} from 'react-native';

/* STYLES */
import styles from './styles';

/* TYPES */
type _t_props = {|
  title: string,
  description: string
|};

export default (props: _t_props) => {
  const { title, description } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.descriptionStyle}>
        {description}
      </Text>
    </View>
  );
};
