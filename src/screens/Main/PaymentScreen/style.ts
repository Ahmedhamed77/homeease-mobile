import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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
  },
  textSpace: {
    paddingBottom: 12,
  },
});
