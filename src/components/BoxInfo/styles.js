// @flow

import { StyleSheet } from 'react-native';
import { COLORS } from 'src/configs';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 15
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 20,
  },
  descriptionStyle: {
    fontWeight: '500',
  }
});
