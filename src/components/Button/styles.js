// @flow

import { StyleSheet } from 'react-native';
import { COLORS } from "src/configs";


export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
    height: 45,
    borderRadius: 20,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: COLORS.WHITE,
    fontSize: 14,
  }
});
