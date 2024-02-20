import AsyncStorage from '@react-native-async-storage/async-storage';

export const setPin = async (pin) => {
    try {
        await AsyncStorage.setItem('pin', pin);
        console.log('PIN set successfully:', pin);
    } catch (error) {
        console.error('Error setting PIN:', error);
    }
};

export const getPin = async () => {
    try {
        const pin = await AsyncStorage.getItem('pin');
        if (pin !== null) {
            console.log('Retrieved PIN:', pin);
            return pin;
        } else {
            console.log('No PIN found');
            return null;
        }
    } catch (error) {
        console.error('Error retrieving PIN:', error);
        return null;
    }
};

export const generateRandomId = () => {
    const randomPart = Math.random().toString(36).substring(2, 10);
    const timestampPart = Date.now().toString(36).substring(4);
    return randomPart + timestampPart;
};