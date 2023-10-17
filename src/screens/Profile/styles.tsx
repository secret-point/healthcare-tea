import { StyleSheet } from 'react-native';
import { BASE_COLORS } from '~Root/config';

export default StyleSheet.create({
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 30,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 9999,
    marginBottom: 12,
  },
  section: {
    borderRadius: 12,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 22,
    paddingRight: 15,
    gap: 18,
    marginBottom: 80,
  },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionIcon: {
    width: 40,
  },
  btnPremium: {
    backgroundColor: BASE_COLORS.yellowOrangeColor,
  },
});
