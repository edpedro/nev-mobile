import { View, Text, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'

import styles from './styles'

import userLogo from '../../assets/user.png'

export default function User(){
  const { user } = useSelector((state) => state.userReduce)
  
  const data = new Date
  const curretData = 
  String(data.getDate()).padStart(2, '0') 
  + '/' + 
  String(data.getMonth() + 1).padStart(2, '0')

  return (
    <View style={styles.container}>
      <View style={styles.contentUser}>
        <Image source={userLogo} style={styles.logouSer}/> 

        <View style={styles.contentUserTitle}>
          <Text style={styles.UserTitleData}>{curretData}</Text>
          <Text style={styles.UserTitleName}>
            {user.user.name[0].toUpperCase() + user.user.name.substr(1)}

          </Text>
        </View>
        
      </View>

      <MaterialIcons name="add-alert" style={{marginRight: 10}} size={34} color="#fff" />
    </View>
  ) 
}