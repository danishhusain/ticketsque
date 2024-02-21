import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/AppScreens/Home/Home';
import NavigationStrings from '../constants/NavigationStrings';
import Profile from '../Screens/AppScreens/Profile/Profile';




const Tab = createMaterialBottomTabNavigator();


const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#007fff"
            inactiveColor="grey"
            screenOptions={{
                headerShown: false,
            }}
            barStyle={{ backgroundColor: '#f7f7f7', elevation: 4, }}
        >
            <Tab.Screen name={NavigationStrings.HOME} component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#007fff',

                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons name="home" size={26} color={focused ? '#8338ec' : 'grey'} />
                    ),
                }}
            />
            <Tab.Screen name={NavigationStrings.PROFILE} component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#007fff',

                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons name="account" size={26} color={focused ? '#8338ec' : 'grey'} />
                    ),
                }}
            />
          
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})