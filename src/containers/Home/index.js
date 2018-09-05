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
import type { _t_navigation } from 'src/types';
import styles from './styles';

type _t_props = {|
  navigation: _t_navigation
|};
type _t_state = {
  data: Array<{title: string, description: string}>
};
const THOUSAND_OBJ = [...Array(1000)].map((_, i) => ({ title: `some titles ${i}`, description: `description ${i}` }));

export default class extends Component<_t_props, _t_state> {
  state = {
    data: THOUSAND_OBJ
  };

  goBack = () => {
    const { navigation } = this.props;
    if (navigation) {
      navigation.goBack();
    }
  };

  goToNews = () => {
    const { navigation } = this.props;
    if (navigation) {
      navigation.navigate({
        routeName: "Newsitems",
        key: "Newsitems"
      });
    }
  };


  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <Header onPress={this.goBack} textCenter={HOME.HEADER} rightButton={HOME.SIGN_OUT} />
        <View style={styles.content}>
          <FlatList
            data={data}
            keyExtractor={item => item.title}
            renderItem={({ item, index }) => (
              <NewsItem
                title={item.title}
                goToNews={this.goToNews}
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
