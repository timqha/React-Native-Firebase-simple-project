// @flow

/* REACT */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

/* STYLES */

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default () => (
  <View style={styles.root}>
    <Text>
      Initial!
    </Text>
  </View>
);
