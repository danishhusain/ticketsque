import React from 'react';
import { Image, View, StyleSheet, } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import CustomLottieAnimation from '../../../Components/Animation';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../../constants/NavigationStrings';
import { useDispatch } from 'react-redux';
import { setIsFirstTime } from '../../../ReduxToolkit/features/authSlice';


const OnBoarding = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const goToScreen = (screen, props) => {
    navigation.navigate(screen);
  };

  const pages = [
    {
      backgroundColor: '#fff',
      image: <CustomLottieAnimation source={require('../../../assets/lottieFiles/biometric.json')} />,
      title: 'Welcome to Ticketsque!',
      subtitle: 'Discover amazing features.',
    },
    {
      backgroundColor: '#fff',
      image: <CustomLottieAnimation source={require('../../../assets/lottieFiles/lock.json')} />,
      title: 'Get started easily.',
      subtitle: 'Simple setup in minutes.',
    },


  ];

  return (
    <View style={styles.container}>
      <Onboarding
        pages={pages}
        skipButtonLabel="Skip"
        nextButtonLabel="Next"
        onSkip={() => {
          goToScreen(NavigationStrings.INITIAL_AUTH)
          dispatch(setIsFirstTime(false))
        }
        }
        onDone={() => {
          goToScreen(NavigationStrings.INITIAL_AUTH),
            dispatch(setIsFirstTime(false))
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'


  },
});

export default OnBoarding;
