import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Keyboard from '../../../Components/Keyboard';
import { generateRandomId, getPin } from '../../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../ReduxToolkit/features/authSlice';
import { showError, showSuccess } from '../../../utils/helperFunctions';
import CustomLottieAnimation from '../../../Components/Animation';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()







  const handlePinEntered = async (Pin) => {
    const StorePin = await getPin();
    const randomId = generateRandomId();
    const data = {
      dummyToken: randomId,
      isValid: true
    }



    if (StorePin === Pin) {
      dispatch(setUser(data))
      showSuccess("Welcome!")


    } else {
      showError("Please Enter Correct PIN!")

    }

  };

  return (
    <View style={styles.container}>
      <CustomLottieAnimation source={require('../../../assets/lottieFiles/lockPower.json')} />

      <Keyboard
        title={'Enter Your PIN'}
        pinLength={4}
        onPinEntered={handlePinEntered}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FFF'
  },
});





export default Login

