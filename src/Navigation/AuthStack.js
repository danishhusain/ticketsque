import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../Screens/AuthScreens/LogIn/Login'
import Signup from '../Screens/AuthScreens/Signup/Signup'
import NavigationStrings from '../constants/NavigationStrings'
import OnBoarding from '../Screens/AuthScreens/OnBoarding/OnBoarding'
import InitialAuth from '../Screens/AuthScreens/InitialAuth/InitialAuth'
import MPin from '../Screens/AuthScreens/MPin/MPin'
import NewMPin from '../Components/NewMPin'
import ConfirmMPin from '../Components/ConfirmMPin'

const AuthStack = (Stack, isFirstTime = false) => {
    return (
        <>
            {isFirstTime && <Stack.Screen
                name={NavigationStrings.ON_BOARDING}
                component={OnBoarding}
                options={{ headerShown: false }}
            />}
            <Stack.Screen
                name={NavigationStrings.INITIAL_AUTH}
                component={InitialAuth}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={NavigationStrings.LOGIN}
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={NavigationStrings.SIGNUP}
                component={Signup}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={NavigationStrings.MPIN}
                component={MPin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={NavigationStrings.NEWMPIN}
                component={NewMPin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={NavigationStrings.CONFIRMMPIN}
                component={ConfirmMPin}
                options={{ headerShown: false }}
            />
        </>
    )
}

export default AuthStack

const styles = StyleSheet.create({})