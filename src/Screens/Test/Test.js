import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import SearchBar from '../../Components/SearchBar'
import Constatnts from '../../constants/Constatnts'


const Test = () => {
  const { productsData } = useSelector((state) => state?.productReducer)
  const { isLoading } = useSelector((state) => state?.loadingReducer)
  // console.log("productsData", productsData)

  return (
    <View style={{ flex: 1 }}>
      <Text>Test</Text>


    </View>
  )
}

export default Test

const styles = StyleSheet.create({})