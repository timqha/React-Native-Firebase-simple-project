// @flow

/* REACT */
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Provider } from 'mobx-react/native';


/* MODULES */
import stores from 'src/stores';
import Navigator from 'src/navigator';

/* STYLES */
const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default () => (
  <Provider {...stores}>
    <View style={styles.root}>
      {/* $FlowFixMe */}
      <Navigator />
    </View>
  </Provider>
);
