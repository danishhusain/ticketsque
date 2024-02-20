import React, { useEffect, } from 'react';
import { View, Text, StyleSheet, Button, Alert, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../../constants/NavigationStrings';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
import { showToast } from '../../../utils/toast';
import { generateRandomId } from '../../../utils/utils';
import { setUser } from '../../../ReduxToolkit/features/authSlice';
import { showSuccess } from '../../../utils/helperFunctions';
import { useDispatch, } from 'react-redux';
import CustomLottieAnimation from '../../../Components/Animation';
import ButtonCompo from '../../../Components/ButtonCompo';
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
      <Text style={styles.title}>Welcome to TicketsQue!</Text>
      <CustomLottieAnimation source={require('../../../assets/lottieFiles/lockInitial.json')} />

      <View style={styles.buttonContainer}>
        <ButtonCompo
          title="LogIn via Biometrics"
          onPress={authenticateWithBiometrics}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonCompo
          title="LogIn via MPin"
          onPress={() => goToScreen(NavigationStrings.LOGIN)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonCompo
          title="Setup MPin"
          onPress={() => goToScreen(NavigationStrings.NEWMPIN)}
        />
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
    paddingVertical: 100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'grey'
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default InitialAuth;
