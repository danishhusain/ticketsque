import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../ReduxToolkit/features/authSlice';

const Profile = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state?.authReducer?.user);

  const handleLogout = async () => {
    dispatch(setUser([]))
  }


  return (
    <View style={styles.Container}>
      <Text>Profile</Text>
      <Button onPress={handleLogout} title="LogOut" />

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})