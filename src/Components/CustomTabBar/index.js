import { Text, View, TouchableOpacity } from 'react-native'

import { Entypo, MaterialIcons, Feather, AntDesign } from '@expo/vector-icons'; 

import styles from './styles'

export default function CustomTabBar({ state, navigation,label}){

  function goTo(screen) {
    navigation.navigate(screen)
  }
  
  return(
    <View style={styles.container}>    
      <TouchableOpacity style={styles.tabItem} onPress={() => goTo("Home")} >
        <Entypo  style={{ opacity: state.index === 0 ? 1: 0.5 }} name="list" size={24} color="black" />
        <Text style={{color: "#000"  }}>
          Inicio
        </Text>      
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem} onPress={() => goTo("Card")}>
        <Entypo style={{ opacity: state.index === 1 ? 1: 0.5 }} name="credit-card" size={24} color="black" />
        <Text style={{color: "#000"  }}>
          Cartão
        </Text> 
      </TouchableOpacity >

      <TouchableOpacity style={styles.tabItemCenter} onPress={() => goTo("Card")}>  
        <AntDesign name="plus" size={30} color="white" />     
      </TouchableOpacity >

      <TouchableOpacity style={styles.tabItem} onPress={() => goTo("Transaction")}>
        <MaterialIcons style={{ opacity: state.index === 2 ? 1: 0.5 }} name="account-balance" size={24} color="black" />
        <Text style={{color: "#000"  }}>
          Lançamento
        </Text> 
      </TouchableOpacity>    

      <TouchableOpacity style={styles.tabItem} onPress={() => goTo("Acount")}>
        <Feather style={{ opacity: state.index === 3 ? 1: 0.5 }} name="user" size={24} color="black" />
        <Text style={{color: "#000"  }}>
          Conta
        </Text> 
      </TouchableOpacity>      
    </View>
  )
}