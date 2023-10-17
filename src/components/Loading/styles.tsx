import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 9999,
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
  },
});
