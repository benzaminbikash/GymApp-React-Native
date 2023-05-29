import {View, Text, Image, ScrollView} from 'react-native'
import React, {useContext} from 'react'
import FitnessCard from '../components/FitnessCard'
import {FitnessItem} from '../Context'

const HomeScreen = () => {
  const {workout, kcal, mins} = useContext(FitnessItem)
  return (
    <View>
      <View
        style={{
          backgroundColor: '#e28743',
          height: 200,
          width: '100%',
          padding: 10,
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '900'}}>
          HOME WORKOUT
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              {workout}
            </Text>
            <Text
              style={{
                marginTop: 4,
                color: 'white',
                fontWeight: '400',
                fontSize: 16,
              }}>
              WORKOUTS
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              {kcal}
            </Text>
            <Text
              style={{
                marginTop: 4,
                color: 'white',
                fontWeight: '400',
                fontSize: 16,
              }}>
              KCAL
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              {mins}
            </Text>
            <Text
              style={{
                marginTop: 4,
                color: 'white',
                fontWeight: '400',
                fontSize: 16,
              }}>
              MINS
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{width: '90%', height: 120, borderRadius: 7, marginTop: 20}}
            source={{
              uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png',
            }}
          />
        </View>
        <FitnessCard />
      </View>
    </View>
  )
}

export default HomeScreen
