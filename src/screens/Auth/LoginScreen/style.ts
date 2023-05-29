import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  goBackButton: {
    marginBottom: 32,
  },
  arrowStyle: {
    size: 24,
    color: 'black',
  },
  contentContainer: {
    marginBottom: 32,
  },
  textAllign: {
    paddingBottom: 12,
  },
  // Email Text Input
  textBackgroundColor: {
    backgroundColor: 'transparent',
  },
  emailContentStyle: {
    borderRadius: 16,
    borderColor: '#ABABAB',
    borderWidth: 1,
    marginBottom: 12,
  },
  underlineStyle: {
    backgroundColor: 'transparent',
  },
  // Password Text Input
  passwordContentStyle: {
    borderRadius: 16,
    borderColor: '#ABABAB',
    borderWidth: 1,
  },
  btnStyle: {
    marginVertical: 32,
    marginHorizontal: 16,
  },
});
