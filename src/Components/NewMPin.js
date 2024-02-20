import React, { useState } from 'react';
import { StyleSheet, View, Alert, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Keyboard from './Keyboard';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';
import ConfirmMPin from './ConfirmMPin';

const NewMPin = () => {
    const navigation = useNavigation();
    const goToScreen = (screen, props) => {
        navigation.navigate(`${screen}`, props);
    };

    const handlePinEntered = async (pin) => {
        goToScreen(NavigationStrings.CONFIRMMPIN, { pin: pin })

    };



    return (
        <View style={styles.container}>
            <Keyboard
                title={'Set New PIN'}
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

export default NewMPin;





