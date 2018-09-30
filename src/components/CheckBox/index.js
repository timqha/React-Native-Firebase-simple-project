// @flow

/* REACT */
import React from 'react';
import {
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/* STYLES */
import { COLORS, SIZES } from 'src/configs';

/* TYPES */
type _t_props = {|
  isChecked: boolean,
  // function
  onPress: () => {}
|};

export default (props: _t_props) => {
  const { isChecked, onPress } = props;
  return (
    <TouchableOpacity hitSlop={SIZES.MORE_TOUCH} onPress={onPress}>
      <Icon
        name={isChecked ? 'check-box' : 'check-box-outline-blank'}
        size={22}
        color={COLORS.BLACK}
      />
    </TouchableOpacity>
  );
};
