import React from 'react'

import {
  StyleSheet, View, Text, Dimensions, Image, TouchableOpacity,
} from 'react-native'
import { logo, search, menu } from '../../assets/images'

const With = Dimensions.get('window')
const HomeTuVan = () => {
  return (
    <View style={style.container}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9900',
        height: 50,
      }}
      >
        <Text style={{ fontSize: 25 }}>
          Tư vấn
        </Text>
      </View>

      <View style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 9,
        // backgroundColor: 'red',
        height: 40,

      }}
      >
        <Image source={menu} style={{ height: 30, width: 30, marginTop: 8 }} />
        <Image source={logo} style={{ height: 30, width: 150, resizeMode: 'cover' }} />
        <Image source={search} style={{ height: 30, width: 30, marginTop: 8 }} />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>
          aaa
        </Text>
      </View>

    </View>
  )
}
const style = StyleSheet.create({
  container:
  {
    flex: 1,
    // backgroundColor: 'blue',
  },
})
export default HomeTuVan
