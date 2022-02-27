import { View, Text, Image } from 'react-native'
import { MaterialIcons, Feather } from '@expo/vector-icons';

import styles from './styles'

import userLogo from '../../assets/user.png'

export default function User(){
  return (
    <View style={styles.container}>
      <View style={styles.contentUser}>
        <Image source={userLogo} style={styles.logouSer}/> 

        <View style={styles.contentUserTitle}>
          <Text style={styles.UserTitleData}>21/02</Text>
          <Text style={styles.UserTitleName}>Eduardo pedro</Text>
        </View>
        
      </View>

      <MaterialIcons name="add-alert" style={{marginRight: 10}} size={34} color="#fff" />
    </View>
  ) 
}