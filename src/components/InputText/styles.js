// @flow

import { StyleSheet } from 'react-native';
import { COLORS } from "src/configs";

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingBottom: 10,
    height: 60,
  },
  textinput: {
    flex: 1,
    height: 45,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.ICON,
    paddingRight: 15,
  },
  containerIcon: {
    position: 'absolute',
    right: 0,
  },
  isError: {
    borderBottomColor: COLORS.ERROR,
  },
  iconIndentation: {
    paddingRight: 10,
    paddingVertical: 10,
  },
  flex: {
    flex: 1
  },
  errorText: {
    color: COLORS.ERROR,
    fontSize: 10,
  }
});
