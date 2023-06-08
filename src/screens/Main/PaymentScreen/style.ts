import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from '../../../shared/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  paymentHeaderContent: {
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    marginVertical: 18,
  },
  textSpace: {
    paddingBottom: 12,
  },
  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderItemContent: {
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  createdItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
