// @flow
import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';
import { inject, observer } from 'mobx-react';

/* Modules */
import FirebaseSdk from 'src/services';
import { COLORS, FIREBASE_CONFIG } from 'src/configs';
import Home from 'src/containers/Home';
import Signup from 'src/containers/Signup';
import Newsitems from 'src/containers/Newsitems';


const routeConfig = {
  Home: {
    screen: Home
  },
  Signup: {
    screen: Signup
  },
  Newsitems: {
    screen: Newsitems
  },
};


const setNavigatorConfig = {
  initialRouteName: "Signup",
  navigationOptions: () => ({
    header: null,
  }),
  // default style for an individual card in stack.
  cardStyle: { backgroundColor: COLORS.WHITE },
};

/* TYPES */
import type { _t_firebase, _t_auth } from 'src/types';

type _t_props = {|
  auth: _t_auth
|};

@inject('auth')
@observer
class Navigator extends Component<_t_props> {

  firebase: _t_firebase;

  constructor(props: _t_props) {
    super(props);
    this.firebase = new FirebaseSdk(FIREBASE_CONFIG);
  }

  _setNavigatorConfig() {

    const { auth } = this.props;

    const navigatorConfig = setNavigatorConfig;

    if (auth && auth.uid) {
      navigatorConfig.initialRouteName = 'Home';
    }
    return navigatorConfig;
  }

  initRouter = () => createStackNavigator(routeConfig, this._setNavigatorConfig())

  render() {
    if (!this.props.auth.isHydrated) { return null; }
    const Router = this.initRouter();

    return (
      <Router screenProps={{ sdk: this.firebase }} />
    );
  }
}

export default Navigator;
