// @flow

import { StyleSheet } from 'react-native';
import { COLORS } from 'src/configs';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
  },
  content: {
    flex: 0.65,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginHorizontal: 35,
  }
});
