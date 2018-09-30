// @flow

/* REACT */
import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

/* MODULES */
import { CheckBox } from 'src/components';

/* STYLES */
import styles from './styles';

/* TYPES */
type _t_props = {
  title: string,
  isChecked: boolean,
  // function
  onPress: () => {},
  goToNews: () => {}
};

export default class extends Component<_t_props> {

  shouldComponentUpdate(nextProps: _t_props) {
    const { isChecked } = this.props;
    return isChecked !== nextProps.isChecked;
  }

  render() {
    const {
      title,
      isChecked,
      onPress,
      goToNews
    } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={goToNews}>
        <Text>{title}</Text>
        <CheckBox isChecked={isChecked} onPress={onPress} />
      </TouchableOpacity>
    );
  }
}
