import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import Keyboard from '../../../Components/Keyboard';
import { generateRandomId, getPin } from '../../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../ReduxToolkit/features/authSlice';
import { showError, showSuccess } from '../../../utils/helperFunctions';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()





  useEffect(() => {
    // Add the beforeRemove event listener
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      // Check the action type
      if (e.data.action.type === 'GO_BACK') {
        // Prevent the default behavior of leaving the screen
        e.preventDefault();

        // Show a confirmation dialog
        Alert.alert(
          'Are you sure?',
          'Do you want to exit the app?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
              onPress: () => { },
            },
            {
              text: 'OK',
              style: 'destructive',
              // Exit the app
              onPress: () => BackHandler.exitApp(),
            },
          ]
        );
      }
    });

    // Return the unsubscribe function to clean up
    return unsubscribe;
  }, [navigation]);


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
      <Keyboard
        title={'Enter PIN'}
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
  },
});





export default Login

