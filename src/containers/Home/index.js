// @flow

/* REACT */
import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';

/* MODULES */
import { Header, NewsItem } from 'src/components';

/* CONSTANT */
import { HOME } from 'src/constants/texts';

/* STYLES */
import styles from './styles';

/* TYPES */
type _t_props = {};
type _t_state = {
  data: Array<{title: string, description: string}>
};
const THOUSAND_OBJ = [...Array(1000)].map((_, i) => ({ title: `some titles ${i}`, description: `description ${i}` }));

export default class extends Component<_t_props, _t_state> {
  state = {
    data: THOUSAND_OBJ
  };

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <Header textCenter={HOME.HEADER} rightButton={HOME.SIGN_OUT} />
        <View style={styles.content}>
          <FlatList
            data={data}
            keyExtractor={item => item.title}
            renderItem={({ item, index }) => (
              <NewsItem
                title={item.title}
                isChecked={index % 3 === 0}
                description={item.description}
              />
            )}
          />
        </View>
      </View>
    );
  }
}
