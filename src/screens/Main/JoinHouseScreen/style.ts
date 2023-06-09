import {StyleSheet} from 'react-native';
import {COLORS} from '../../../shared/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  viewContent: {
    flex: 1,
  },
  joinTextStyle: {
    paddingBottom: 12,
  },
  textSpace: {
    paddingBottom: 12,
  },
  arrowContainer: {
    marginBottom: 32,
  },
  inputSpace: {
    marginBottom: 12,
  },
  inputStyle: {
    backgroundColor: 'transparent',
  },
  inputContentStyle: {
    borderRadius: 16,
    borderColor: COLORS.silverGray,
    borderWidth: 1,
  },
  inputUnderlineStyle: {
    backgroundColor: 'transparent',
  },
});
