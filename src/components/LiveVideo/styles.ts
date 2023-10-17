import { StyleSheet } from 'react-native';
import { BASE_COLORS } from '~Root/config';

const styles = StyleSheet.create({
  posterContainer: {
    position: 'relative',
  },
  playButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  posterImage: {
    opacity: 0.5,
    height: 300,
    backgroundColor: BASE_COLORS.blackColor,
  },
  video: {
    backgroundColor: BASE_COLORS.blackColor,
    height: 200,
  },
  modalVideo: {
    margin: 0,
  },
  fullScreenVideo: {
    backgroundColor: BASE_COLORS.blackColor,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    elevation: 1,
  },
});

export default styles;
