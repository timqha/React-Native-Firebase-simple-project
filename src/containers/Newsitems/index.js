// @flow

/* REACT */
import React from 'react';
import {
  View,
  ScrollView
} from 'react-native';

/* MODULES */
import { Header, BoxInfo } from 'src/components';

/* CONSTANT */
import { NEWS_ITEM } from 'src/constants/texts';

/* STYLES */
import styles from './styles';

export default () => (
  <View style={styles.container}>
    <Header textCenter={NEWS_ITEM.HEADER} leftIcon="keyboard-arrow-left" />
    <View style={styles.content}>
      <ScrollView>
        <BoxInfo
          title="Title"
          description="description"
        />
      </ScrollView>
    </View>
  </View>
);
