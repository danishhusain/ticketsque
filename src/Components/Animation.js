import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import ImagePath from '../constants/ImagePath';

const animationFile = ImagePath.biometric

const CustomLottieAnimation = ({ source }) => {
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      // Start the animation on mount
      animationRef.current.play();
    }
  }, []);

  const handlePlayPause = () => {
    if (animationRef.current) {
      if (animationRef.current.isPaused) {
        animationRef.current.resume();
      } else {
        animationRef.current.pause();
      }
    }
  };

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={source}
        style={styles.animation}
        autoPlay={false}
        loop
        speed={1.5}
      />
      {/* <Button title={animationRef.current?.isPaused ? "Resume" : "Pause"} onPress={handlePlayPause} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 250,
    height: 250,
    marginBottom: 100,
    alignSelf: 'center'

  },
});

export default CustomLottieAnimation;
