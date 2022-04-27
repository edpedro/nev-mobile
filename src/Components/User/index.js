import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'

import styles from './styles'

import { FontAwesome } from '@expo/vector-icons';

import { hideBalance } from '../../store/modules/user/actions'

import { navigate } from '../../services/navigation'


export default function User({ navigation }){
  const { user, hideBal, imgUser } = useSelector((state) => state.users)

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
        {imgUser && Object.keys(imgUser).length > 0 
          ?
          <Image source={{uri: imgUser.uri}} style={styles.logouSer}/>

          :
          <TouchableOpacity onPress={() => navigate('Acount')}>
            <FontAwesome name="user-circle" size={40} color="#E0E6F8" style={{marginLeft: 15}}/>
          </TouchableOpacity> 

        }        
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