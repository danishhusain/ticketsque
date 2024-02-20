import React, { useRef } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const { width } = Dimensions.get('window');
const data = ['brown', 'orange', 'red'];

const OnBoarding = () => {
  const scrollValue = useRef(new Animated.Value(0)).current;

  function isLastPage(scrollValue) {
    const threshold = (data.length - 1) * width;
    return Math.abs(scrollValue._value - threshold) < 0.1;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
          { useNativeDriver: false },
        )}>
        {data.map((color, index) => (
          <View style={[styles.card, { backgroundColor: color }]} key={index} />
        ))}
      </ScrollView>
      <View style={styles.indicatorConatiner} pointerEvents="none">
        {data.map((color, index) => (
          <Indicator color={color} index={index} key={index} scrollValue={scrollValue} />
        ))}
      </View>
      {isLastPage(scrollValue) && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

function Indicator({ index, scrollValue }) {
  const translateX = scrollValue.interpolate({
    inputRange: [-width + index * width, index * width, width + index * width],
    outputRange: [-20, 0, 20],
  });
  return (
    <View style={styles.indicator}>
      <Animated.View
        style={[styles.activeIndicator, { transform: [{ translateX }] }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 3
  },
  card: {
    width: width - 10,
    height: '100%',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  indicatorConatiner: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#00000044',
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  activeIndicator: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  continueButton: {
    backgroundColor: 'green',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
  },
  continueText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default OnBoarding;
