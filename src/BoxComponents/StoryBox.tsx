import { Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {Video} from 'react-native-video';

const StoryBox = ({videourl}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Toggle fullscreen mode
  const handleVideoPress = () => {
    setIsModalVisible(true);
    setIsFullscreen(true);
  };
  const handleCloseFullscreen = () => {
    setIsModalVisible(false);
    setIsFullscreen(false);
  };
  return (
    <View style={styles.StoryBox}>
       <TouchableOpacity onPress={handleVideoPress}>
        <Video
          source={{ uri: videourl }} // Replace with your video source
          style={[styles.video, isFullscreen ? styles.hidden : null]} // Hide the regular video if fullscreen is active
          resizeMode="cover"
          muted={true}
        />
      </TouchableOpacity>

      {/* Fullscreen Modal */}
      {isModalVisible && (
        <Modal
          visible={isModalVisible}
          transparent={false}
          animationType="fade"
          onRequestClose={handleCloseFullscreen}
        >
          <StatusBar hidden={true}/>
          <TouchableOpacity style={styles.closeButton} onPress={handleCloseFullscreen}>
            <Video
              source={{ uri: videourl }}
              style={[styles.fullscreenVideo, isFullscreen ? styles.fullscreen : null]}
              resizeMode="cover"
              muted={false}
              onEnd={handleCloseFullscreen} // Close fullscreen after the video ends
            />
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  StoryBox:{
    height:190,
    width:120,
    // backgroundColor:"red",
    // borderRadius:20,
    marginRight:5
  },
  video:{
    height:"100%",
    width:"100%",
    borderRadius:20,
  },
  hidden: {
    display: 'none', 
  },
  fullscreenVideo: {
    width: '100%',
    height:'100%',
  },
  fullscreen: {
    // Styles specific to fullscreen mode
  },
  closeButton: {
    width: '100%',
    height: '100%',
  },
})

export default StoryBox

