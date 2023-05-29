import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen'
import WorkoutScreen from '../screen/WorkoutScreen'
import FitScreen from '../screen/FitScreen'
import RestScreen from '../screen/RestScreen'

const Stack = createNativeStackNavigator()

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'none',
          headerShown: false,
        }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Work' component={WorkoutScreen} />
        <Stack.Screen name='Fit' component={FitScreen} />
        <Stack.Screen name='Rest' component={RestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
