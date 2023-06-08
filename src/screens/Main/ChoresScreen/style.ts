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
    marginBottom: 8,
  },
  sectionListContentContainer: {
    paddingHorizontal: 16,
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
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfoContent: {
    flexDirection: 'row',
  },
});
