import { useTheme } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomStatusBar = () => {
    const theme = useTheme().colors;

    return (
        <LinearGradient
            colors={['#8338ec', '#007fff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1.5, y: 0 }}
            style={{ height: StatusBar.currentHeight }}
        >
            <SafeAreaView>
                <StatusBar translucent backgroundColor='transparent' />
            </SafeAreaView>
        </LinearGradient>
    );
};

export default CustomStatusBar;
