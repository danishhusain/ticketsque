import { StyleSheet, View, } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';


const Home = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://ticketsque.com/' }} style={{ flex: 1 }} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'

  }
})