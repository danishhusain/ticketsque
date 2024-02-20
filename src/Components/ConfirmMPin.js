import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, BackHandler } from 'react-native';
import Keyboard from './Keyboard';
import { useNavigation } from '@react-navigation/native';
import { setPin } from '../utils/utils';
import NavigationStrings from '../constants/NavigationStrings';
import { showError, showSuccess } from '../utils/helperFunctions';
import CustomLottieAnimation from './Animation';

const ConfirmMPin = ({ route }) => {
    const { pin } = route?.params
    const navigation = useNavigation();
    const goToScreen = (screen, props) => {
        navigation.navigate(`${screen}`, props);
    };



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


    const handlePinEntered = async (ConfirmPin) => {
        if (ConfirmPin === pin) {
            goToScreen(NavigationStrings.LOGIN)
            setPin(ConfirmPin);
            showSuccess("New PIN set successfully!")

        } else {

            showError("Wrong PIN")

        }

    };

    return (
        <View style={styles.container}>
            <CustomLottieAnimation source={require('../assets/lottieFiles/lock.json')} />

            <Keyboard
                title={'Confirm PIN'}
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
        backgroundColor: '#FFF'

    },
});

export default ConfirmMPin;


