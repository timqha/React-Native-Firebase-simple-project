// @flow

import { StyleSheet, Platform } from 'react-native';
import { COLORS } from 'src/configs';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    paddingVertical: 15,
    marginVertical: 5,


    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowOpacity: 1,
        shadowRadius: 8,
        shadowColor: COLORS.BORDER,
        shadowOffset: {
          height: 0,
          width: 0,
        },
      }
    }),
  }
});
