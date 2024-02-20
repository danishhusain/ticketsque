import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../ReduxToolkit/features/authSlice';
import ButtonCompo from '../../../Components/ButtonCompo';
import { moderateScale } from '../../../styles/responsiveSize';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state?.authReducer?.user);

  const handleLogout = async () => {
    dispatch(setUser([]));
  };

  return (
    <View style={styles.container}>
      <View style={[styles.container, {}]} >
        <Image
          source={{ uri: user?.avatar || 'https://via.placeholder.com/150' }}
          style={styles.avatar}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.email}>johndoe@gmail.com</Text>
      </View>
      <ButtonCompo
        title="Log Out"
        onPress={handleLogout}
        style={styles.logoutButton}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',

  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3a3838',
  },
  email: {
    fontSize: 16,
    marginBottom: moderateScale(20),
    color: '#3a3838',

  },
  logoutButton: {
    marginBottom: moderateScale(20)
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 12,
    textAlign: 'center',
  },
});

export default Profile;
