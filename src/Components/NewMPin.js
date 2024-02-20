import React, {  } from 'react';
import { StyleSheet, View, } from 'react-native';
import Keyboard from './Keyboard';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';
import CustomLottieAnimation from './Animation';

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
            <CustomLottieAnimation source={require('../assets/lottieFiles/lock.json')} />
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
        backgroundColor: '#FFF'

    },
});

export default NewMPin;





