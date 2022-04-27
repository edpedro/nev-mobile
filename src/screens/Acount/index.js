import { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'

import userLogo from '../../assets/avatar.jpg'

import { logout, setImg } from '../../store/modules/user/actions'

import User from '../../Components/User'

import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import styles from './styles'


export default function Acount(){
  const [imagePicker, setImagePicker] = useState("")

  const dispatch = useDispatch()

  function Logout(){
    dispatch(logout())
  }

  const buttonAlert = () =>
    Alert.alert('Deseja abrir', 'Camera ou galeria', [
      {
        text: 'Camera',
        onPress: () => console.log('Cancel Pressed'),       
      },
      { 
        text: 'Geleria', 
        onPress: () => handleImageGaleria() 
      },
    ]);

    async function handleImageGaleria (){
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      })
      
      if(!result.cancelled){
        await AsyncStorage.removeItem('@image')

        await AsyncStorage.setItem('@image', JSON.stringify(result))
          
        dispatch(setImg(result))
        setImagePicker(result) 
      }
    }

    useEffect( async () => {
      const image = await AsyncStorage.getItem('@image') 
      const result = JSON.parse(image)
      if(result){
        dispatch(setImg(result))
        setImagePicker(result)
      }
      
    },[])
 
  return (
    <View style={styles.container}>
      <User /> 
      <View style={styles.content}> 
      <View>
        <View style={styles.contentPhoto}>
          {imagePicker.uri 
          ?
          <View style={styles.imgUser}>
          <TouchableOpacity onPress={buttonAlert}>
            <Image source={{uri: imagePicker.uri}} style={styles.logouSer}/>
            <FontAwesome name="camera" size={60} color="#058373" style={{ marginTop: -60, marginLeft: 15}}/>
          </TouchableOpacity>   
        </View>    
        :
        <TouchableOpacity onPress={buttonAlert}>
          <FontAwesome name="user-circle" size={250} color="#E0E6F8" />        
          <FontAwesome name="camera" size={60} color="#058373" style={{ marginTop: -60}}/>
        </TouchableOpacity>
          }
        

          
        </View>     
      </View>
       <View style={styles.exitIcon}>
         <View style={styles.exit}>
          <TouchableOpacity onPress={Logout}>
            <MaterialIcons name="exit-to-app" size={40} color="black" />
            <Text>Sair</Text>
          </TouchableOpacity>            
        </View>   
      </View>             
      </View>
    </View>
  )
}