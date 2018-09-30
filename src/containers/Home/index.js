// @flow

/* REACT */
import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import { inject, observer } from 'mobx-react';

/* MODULES */
import { Header, NewsItem } from 'src/components';

/* CONSTANT */
import { HOME } from 'src/constants/texts';

/* STYLES */
import type {
  _t_navigation,
  _t_auth,
  _t_screenProps,
  _t_newsItem
} from 'src/types';
import styles from './styles';

type _t_props = {|
  navigation: _t_navigation,
  auth: _t_auth,
  screenProps: _t_screenProps
|};
type _t_state = {
  data: Array<_t_newsItem>
};

@inject('auth')
@observer
class Home extends Component<_t_props, _t_state> {

  state = {
    // $FlowFixMe
    data: this.props.auth.newsList
  }

  componentDidMount() {
    const { auth } = this.props;
    const { sdk } = this.props.screenProps;

    sdk.news.getList((news) => {
      auth.setValue({ newsData: news });
      this.setState(() => ({
        // $FlowFixMe
        data: this.props.auth.newsList
      }));
    });

  }

  goBack = () => {
    const { navigation, auth } = this.props;
    const { sdk } = this.props.screenProps;

    if (navigation) {
      sdk.auth.signOut()
        .catch((err) => { console.warn('error in signOut', err); });
      auth.clearStore();

      navigation.navigate({
        routeName: "Signup",
        key: "Signup"
      });
    }
  };

  goToNews = (item: Object) => {
    const { navigation } = this.props;
    if (navigation) {
      navigation.navigate({
        routeName: "Newsitems",
        key: "Newsitems",
        params: { item }
      });
    }
  };

  checkBox = (item: _t_newsItem, index: number) => {
    const { auth } = this.props;
    const { data } = this.state;
    if (item.id) {
      auth.setSelected(item.id);
    }

    const preparedData = data.slice();
    // $FlowFixMe
    preparedData[index] = { ...preparedData[index], isSelect: !preparedData[index].isSelect };
    this.setState(() => ({ data: preparedData }));
  }


  render() {
    const { data } = this.state;

    return (
      <View style={styles.container}>
        <Header onPress={this.goBack} textCenter={HOME.HEADER} rightButton={HOME.SIGN_OUT} />
        <View style={styles.content}>
          <FlatList
          // $FlowFixMe
            data={data}
            keyExtractor={item => item.title}
            renderItem={({ item, index }) => (
              <NewsItem
                onPress={() => this.checkBox(item, index)}
                title={item.title}
                goToNews={() => this.goToNews(item)}
                isChecked={item.isSelect}
                description={item.description}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

export default Home;
