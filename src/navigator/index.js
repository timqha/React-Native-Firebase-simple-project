// @flow
import React, { PureComponent } from 'react';

import { createStackNavigator } from 'react-navigation';

/* Modules */
import { COLORS } from 'src/configs';
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
type _t_props = {};

export default class Navigator extends PureComponent<_t_props> {

  initRouter = () => createStackNavigator(routeConfig, setNavigatorConfig)

  render() {
    const Router = this.initRouter();
    return (
      <Router screenProps={{}} />
    );
  }
}
