// @flow

/* REACT */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

/* MODULES */
import Signup from './containers/Signup';

/* STYLES */
const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default () => (
  <SafeAreaView style={styles.root}>
    <Signup />
  </SafeAreaView>
);
