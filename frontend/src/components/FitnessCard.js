import {View, Text, Pressable, Image} from 'react-native'
import React from 'react'
import fitness from '../data/fitness'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native'

const FitnessCard = () => {
  const navigation = useNavigation()
  return (
    <View>
      {fitness.map((item, index) => (
        <Pressable
          onPress={() => {
            navigation.navigate('Work', {data: item})
          }}
          key={index}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Image
            source={{uri: item.image}}
            style={{width: '95%', height: 120, borderRadius: 7}}
          />
          <Text
            style={{
              position: 'absolute',
              top: 20,
              left: 20,
              color: 'white',
              fontSize: 16,
              fontWeight: '900',
            }}>
            {item.name}
          </Text>
          <Icon
            name='lightning-bolt'
            size={25}
            style={{position: 'absolute', color: 'white', left: 20, bottom: 15}}
          />
        </Pressable>
      ))}
    </View>
  )
}

export default FitnessCard
