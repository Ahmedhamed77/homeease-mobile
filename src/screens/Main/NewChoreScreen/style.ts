import {StyleSheet} from 'react-native';
import {COLORS} from '../../../shared/colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  contentContainer: {
    flex: 1,
  },
  textSpace: {
    paddingBottom: 12,
  },
  usersContent: {
    marginHorizontal: 12,
    marginBottom: 18,
  },
  itemStyle: {
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
  },
  dateContainer: {
    marginBottom: 18,
  },
  pickerTextContainer: {
    backgroundColor: COLORS.melrose,
    borderRadius: 12,
    padding: 12,
    width: 150,
    alignSelf: 'center',
  },
  pickerStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
