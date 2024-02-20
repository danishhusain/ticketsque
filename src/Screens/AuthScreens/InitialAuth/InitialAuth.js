import React, { useEffect, } from 'react';
import { View, Text, StyleSheet, Button, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../../constants/NavigationStrings';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
import { showToast } from '../../../utils/toast';
import { generateRandomId } from '../../../utils/utils';
import { setUser } from '../../../ReduxToolkit/features/authSlice';
import { showSuccess } from '../../../utils/helperFunctions';
import { useDispatch, } from 'react-redux';
const rnBiometrics = new ReactNativeBiometrics()


const InitialAuth = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const goToScreen = (screen) => {
    navigation.navigate(screen);
  };



  useEffect(() => {
    checkBiometricAvailability()
  }, [checkBiometricAvailability])

  const checkBiometricAvailability = async () => {
    try {
      const { available, biometryType } = await rnBiometrics.isSensorAvailable();

      if (available) {
        showToast('Biometric is available!')

      } else {
        showToast('Biometric authentication is not available on this device.!')

      }
    } catch (error) {
      console.error('Error checking biometric availability:', error);
    }
  };

  const authenticateWithBiometrics = async () => {
    const randomId = generateRandomId();
    const data = {
      dummyToken: randomId,
      isValid: true
    }

    try {
      const { success } = await rnBiometrics.simplePrompt({ promptMessage: 'Authenticate using biometrics' });
      if (success) {
        dispatch(setUser(data))
        showSuccess("Welcome!")

      } else {
        showToast('Biometric authentication cancelled')
      }
    } catch (error) {
      showToast('Biometric authentication error:')
    }
  };






  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyApp!</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={authenticateWithBiometrics} title="LOGIN via Biometrics" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => goToScreen(NavigationStrings.LOGIN)} title="LOGIN via MPIN" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => goToScreen(NavigationStrings.NEWMPIN)} title="Setup MPIN" />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default InitialAuth;
