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
  choresHeaderContent: {
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 12,
  },
  textSpace: {
    paddingBottom: 12,
  },
});
