import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import colors from '../styles/colors';

const Stack = createNativeStackNavigator();

const Routes = () => {
    const theme = useColorScheme() === 'dark' ? colors.dark : colors.light;

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                {
                    false ? <>{AppStack(Stack)}</>
                        : <>{AuthStack(Stack)}</>
                }
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Routes

const styles = StyleSheet.create({})