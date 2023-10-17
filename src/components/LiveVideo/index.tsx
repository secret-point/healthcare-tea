import React, { memo, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import VideoPlayer, {
  VideoPlayerProperties,
} from 'react-native-video-controls';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import FastImage from '~Root/components/FastImage';
import { BASE_COLORS, GlobalStyles } from '~Root/config';

interface Props extends Omit<VideoPlayerProperties, 'source'> {
  uri: string;
}

const LiveVideo = memo(({ style, uri, poster, ...rest }: Props) => {
  const [paused, setPaused] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const onPressPoster = () => {
    setShowVideo(true);
  };

  const onCloseVideo = () => {
    setShowVideo(false);
  };

  const onLoadVideo = () => {
    setPaused(false);
  };

  const onPause = () => {
    setPaused(true);
  };

  return (
    <>
      <TouchableOpacity style={styles.posterContainer} onPress={onPressPoster}>
        <FastImage
          source={{ uri: poster }}
          style={[GlobalStyles.container, styles.posterImage]}
        />
        <View style={styles.playButton}>
          <Icon name="play-outline" size={60} color={BASE_COLORS.whiteColor} />
        </View>
      </TouchableOpacity>
      <Modal
        coverScreen
        isVisible={showVideo}
        onBackButtonPress={onCloseVideo}
        style={styles.modalVideo}>
        <VideoPlayer
          paused={paused}
          controls={true}
          style={[styles.video, style]}
          posterResizeMode="cover"
          resizeMode="contain"
          onBack={onCloseVideo}
          source={{ uri }}
          onLoad={onLoadVideo}
          onPause={onPause}
          {...rest}
        />
      </Modal>
    </>
  );
});

export default LiveVideo;
