import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imagePicker: {
    width: 150,
    height: 170,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});
