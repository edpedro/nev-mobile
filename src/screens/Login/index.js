import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Input from '../../Components/Input';
import Loading from '../Loading'

import { loginUser, authUser } from '../../store/modules/user/actions'

import { replace } from '../../services/navigation'

import styles from './styles'

export default function Login({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [hidePass, setHidePass] = useState(true)
  const [loggedState, setLoggedState] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    auth()
  }, [])

  async function auth(){
    const user = await AsyncStorage.getItem('@data') 
 
    if(!user){
      setLoggedState(true);
      replace('Login');
    }else {
      dispatch(authUser('user', JSON.parse(user)))
      replace('Home');
     }
   }  
   

  function validate(){
    Keyboard.dismiss()
    let isValid = true
    if(!email){
      handleError("Por favor insira e-mail", 'email')
      isValid = false
    }
    if(!password){
      handleError("Por favor insira senha", 'password')
      isValid = false
    }

    if(isValid){
      handleSubmit()
    }
  }

  function handleSubmit(){
    const data = {
      email,
      password
    }   
    dispatch(loginUser(data))
  } 

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  if(!loggedState){
    return (
      <Loading />
    )
  }

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
    > 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.content}>
        <Text style={styles.title}>Controle Financeiro</Text>

        <Input 
          title="Email" 
          name={email} 
          setData={setEmail} 
          iconName='mail'
          error={errors.email}
          keyboardType="email-address"
          autoCapitalize='none'
          onFocus={() => handleError(null, 'email')}
        /> 
        <Input 
          title="Senha" 
          name={password} 
          secure={hidePass} 
          setData={setPassword} 
          error={errors.password}
          iconName={hidePass ? "eye" : 'eye-off'}
          setHidePass={setHidePass}
          autoCapitalize='none'
          onFocus={() => handleError(null, 'password')}
        />  

        <TouchableOpacity style={styles.button} onPress={validate}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.messageView}>
          <Text style={styles.messageText}>Ainda não possuir um conta?</Text>
        
          <TouchableOpacity onPress={() => navigation.replace("Register")}>
            <Text style={styles.messageButtonText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>    
      </View>
    </TouchableWithoutFeedback>  
  </KeyboardAvoidingView>
   
  );
}
