// @flow

/* REACT */
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

/* MODULES */
import Navigator from 'src/navigator';

/* STYLES */
const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default () => (
  <View style={styles.root}>
    <Navigator />
  </View>
);
