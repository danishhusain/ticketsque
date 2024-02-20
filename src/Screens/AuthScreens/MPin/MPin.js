import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, BackHandler, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { showError, showSuccess } from '../../../utils/helperFunctions';
import { setUser } from '../../../ReduxToolkit/features/authSlice';
import { generateRandomId, getPin } from '../../../utils/utils';
import { useDispatch } from 'react-redux';

const MPin = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
            if (e.data.action.type === 'GO_BACK') {
                e.preventDefault();
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
                            onPress: () => BackHandler.exitApp(),
                        },
                    ]
                );
            }
        });

        return unsubscribe;
    }, [navigation]);

    const handlePinEntered = async (pin) => {
        try {
            const storedPin = await getPin();
            const randomId = generateRandomId();
            const data = {
                dummyToken: randomId,
                isValid: true
            };

            if (storedPin === pin) {
                dispatch(setUser(data));
                showSuccess("Welcome!");
            } else {
                showError("Please Enter Correct PIN!");
            }
        } catch (error) {
            console.error('Error handling PIN:', error);
            showError("An error occurred. Please try again.");
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

export default MPin;
