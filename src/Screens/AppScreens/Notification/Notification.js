import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImagePath from '../../../constants/ImagePath'
import CustomLottieAnimation from '../../../Components/Animation'

const animationFile = ImagePath?.biometric

const Notification = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'grey' }}>
      <Text>Notification</Text>
     
      <CustomLottieAnimation source={require('../../../assets/lottieFiles/biometric.json')} />

     


    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})