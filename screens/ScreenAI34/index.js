import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Video } from 'expo-av';

const VideoScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Video Player</Text>
      </View>
      <View style={styles.videoContainer}>
        <Video source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} rate={1.0} volume={1.0} isMuted={false} resizeMode="cover" shouldPlay isLooping style={styles.video} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 50,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  video: {
    width: '100%',
    height: '100%'
  }
});
export default VideoScreen;