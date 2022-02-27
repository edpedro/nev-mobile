import { View, TouchableOpacity } from 'react-native'

import { Entypo, AntDesign  } from '@expo/vector-icons'; 

import styles from './styles'

export default function CustomTabBar({ state, navigation}){

  function goTo(screen) {
    navigation.navigate(screen)
  }

  return(
    <View style={styles.container}>     
      <TouchableOpacity style={styles.tabItem} onPress={() => goTo("Home")}>
        <Entypo style={{ opacity: state.index === 0 ? 1: 0.5 }} name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => goTo("Card")}>
        <Entypo style={{ opacity: state.index === 0 ? 1: 0.5 }} name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Entypo style={{ opacity: state.index === 0 ? 1: 0.5 }} name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Entypo style={{ opacity: state.index === 0 ? 1: 0.5 }} name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Entypo style={{ opacity: state.index === 0 ? 1: 0.5 }} name="home" size={24} color="black" />
      </TouchableOpacity>      
    </View>
  )
}