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
import type { _t_navigation } from 'src/types';
import styles from './styles';

type _t_props = {|
  navigation: _t_navigation
|};

export default (props: _t_props) => {

  const goBack = () => {
    const { navigation } = props;
    if (navigation) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Header onPress={goBack} textCenter={NEWS_ITEM.HEADER} leftIcon="keyboard-arrow-left" />
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
};
