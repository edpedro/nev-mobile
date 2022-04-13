import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'

import styles from './styles'

import userLogo from '../../assets/user.png'

import { hideBalance } from '../../store/modules/user/actions'


export default function User(){
  const { user, hideBal } = useSelector((state) => state.users)

  const dispatch =  useDispatch()

  const data = new Date
  const curretData = 
  String(data.getDate()).padStart(2, '0') 
  + '/' + 
  String(data.getMonth() + 1).padStart(2, '0')

  function handleHideBalance(){
    dispatch(hideBalance(!hideBal))
  }

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
      <TouchableOpacity onPress={handleHideBalance}>       
        <Ionicons name={hideBal ? "eye" : "eye-off"} style={{marginRight: 40}} size={34} color="#fff" />
      </TouchableOpacity>      
    </View>
  ) 
}