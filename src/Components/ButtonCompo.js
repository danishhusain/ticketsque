import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { moderateScale, scale, textScale, width } from '../styles/responsiveSize';
import LinearGradient from 'react-native-linear-gradient';

const ButtonCompo = ({ title, onPress, style, bgColor, textStyle, disabled }) => {
  const theme = useTheme().colors;

  return (

    <TouchableOpacity
      onPress={onPress}
    >
      <LinearGradient colors={['#8338ec', '#007fff']} start={{ x: 0, y: 0 }} end={{ x: 1.5, y: 0 }}
        style={[styles.TouchableOpacityStyle, style, {
          backgroundColor: disabled ? '#CCCCCC' : theme.btnColor

        }]}
      >
        <Text
          style={[styles.textStyle, textStyle]}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonCompo;

const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    width: width / 1.1,
    alignItems: 'center',
    alignSelf: "center",
    justifyContent: 'center',
    borderRadius: scale(6),
    height: moderateScale(48),
    paddingHorizontal: moderateScale(8),
  }, textStyle: {
    color: '#FFF',
    fontSize: textScale(20),
    fontWeight: 'bold'
  }
});
