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
  inputSpace: {
    marginBottom: 12,
  },
  inputStyle: {
    backgroundColor: 'transparent',
  },
  inputContentStyle: {
    borderRadius: 16,
    borderColor: '#ABABAB',
    borderWidth: 1,
  },
  inputUnderline: {
    backgroundColor: 'transparent',
  },

  itemStyle: {
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
  },
  dateContainer: {
    marginBottom: 18,
  },
  pickerStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },

  pickerTextContainer: {
    backgroundColor: COLORS.melrose,
    borderRadius: 12,
    padding: 12,
    width: 150,
    alignSelf: 'center',
  },
});
