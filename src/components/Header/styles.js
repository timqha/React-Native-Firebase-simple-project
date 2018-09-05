// @flow

import { StyleSheet } from 'react-native';
import { COLORS } from 'src/configs';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
  },
  content: {
    flex: 1 / 3
  },
  centerText: {
    color: COLORS.TEXT_COLOR,
    textAlign: 'center',
    fontWeight: '800',
  },
  rightText: {
    textAlign: 'right',
    fontWeight: '400',
  }
});
