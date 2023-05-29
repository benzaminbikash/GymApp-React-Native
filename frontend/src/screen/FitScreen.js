import {View, Text, Image, Pressable} from 'react-native'
import React, {useState, useContext} from 'react'
import {useRoute, useNavigation} from '@react-navigation/native'
import {FitnessItem} from '../Context'
const FitScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const excersise = route.params.data
  const [index, setIndex] = useState(0)
  const current = excersise[index]

  const {
    complete,
    workout,
    kcal,
    mins,
    setMinus,
    setCal,
    setWorkout,
    setComplete,
  } = useContext(FitnessItem)

  return (
    <View>
      <Image
        source={{uri: current.image}}
        style={{width: '100%', height: 370}}
      />
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          fontWeight: 'bold',
          marginTop: 30,
          textAlign: 'center',
        }}>
        {current.name}
      </Text>
      <Text
        style={{
          fontSize: 40,
          color: 'black',
          fontWeight: 'bold',
          marginTop: 30,
          textAlign: 'center',
        }}>
        x{current.sets}
      </Text>
      {index + 1 >= excersise.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate('Home')
            setTimeout(() => {
              setIndex(e => e + 1)
            }, 2000)
          }}
          style={{
            backgroundColor: 'blue',
            width: 140,
            alignSelf: 'center',
            padding: 10,
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 30,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
            Finish
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate('Rest')
            setTimeout(() => {
              setIndex(e => e + 1)
              setWorkout(workout + 1)
              setMinus(mins + 2.5)
              setCal(kcal + 6.4)
              setComplete([...complete, current.name])
            }, 2000)
          }}
          style={{
            backgroundColor: 'blue',
            width: 140,
            alignSelf: 'center',
            padding: 10,
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 30,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
            DONE
          </Text>
        </Pressable>
      )}
      <Pressable
        style={{
          margin: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: 40,
        }}>
        {/* {index > 0 && ( */}
        <Pressable
          disabled={index === 0}
          onPress={() => {
            setIndex(e => e - 1)
          }}
          style={{
            backgroundColor: 'green',
            padding: 10,
            width: 120,
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Pre
          </Text>
        </Pressable>
        {/* // )} */}
        {index + 1 >= excersise.length ? (
          <Pressable
            onPress={() => navigation.navigate('Home')}
            style={{
              backgroundColor: 'green',
              padding: 10,
              width: 120,
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Skip
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              // navigation.navigate('Rest')
              //   setTimeout(() => {
              setIndex(e => e + 1)
              //   }, 2000)
            }}
            style={{
              backgroundColor: 'green',
              padding: 10,
              width: 120,
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Skip
            </Text>
          </Pressable>
        )}
      </Pressable>
    </View>
  )
}

export default FitScreen
