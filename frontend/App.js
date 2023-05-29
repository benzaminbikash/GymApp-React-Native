import {View, Text} from 'react-native'
import React from 'react'
import HomeScreen from './src/screen/HomeScreen'
import AppNavigator from './src/route/AppNavigator'
import FitnessContext from './src/Context'

const App = () => {
  return (
    <FitnessContext>
      <AppNavigator />
    </FitnessContext>
  )
}

export default App
