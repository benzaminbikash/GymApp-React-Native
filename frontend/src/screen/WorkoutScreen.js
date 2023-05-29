import {View, Text, ScrollView, Image, Pressable} from 'react-native'
import React, {useContext} from 'react'
import {useRoute, useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'
import {FitnessItem} from '../Context'

const WorkoutScreen = () => {
  const route = useRoute()
  const {image, excersises} = route.params.data
  const navigation = useNavigation()
  const {complete, setComplete, setMinus, setCal, setWorkout} =
    useContext(FitnessItem)

  return (
    <>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <Image source={{uri: image}} style={{width: '100%', height: 170}} />
        <Icon
          name='arrowleft'
          color='white'
          size={30}
          style={{position: 'absolute', padding: 10}}
          onPress={() => navigation.goBack()}
        />
        {excersises.map((item, index) => (
          <Pressable
            style={{
              margin: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            key={index}>
            <Image source={{uri: item.image}} style={{width: 90, height: 90}} />
            <View style={{marginLeft: 10, width: 270}}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
                {item.name}
              </Text>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'grey'}}>
                x{item.sets}
              </Text>
            </View>
            {complete.includes(item.name) && (
              <Icon name='checkcircle' color='green' size={25} />
            )}
          </Pressable>
        ))}
      </ScrollView>
      <Pressable
        onPress={() => {
          navigation.navigate('Fit', {
            data: excersises,
          })
          setComplete([])
          setMinus(0)
          setCal(0)
          setWorkout(0)
        }}
        style={{
          padding: 10,
          backgroundColor: 'blue',
          width: 120,
          borderRadius: 6,
          alignSelf: 'center',
          alignItems: 'center',
          margin: 10,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
          START
        </Text>
      </Pressable>
    </>
  )
}

export default WorkoutScreen
