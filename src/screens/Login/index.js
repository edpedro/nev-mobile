import { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useAuth } from '../../contexts/Auth'


import Input from '../../Components/Input';

import styles from './styles'

export default function Login({ navigation }) {
  const { handleLogin } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

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
    handleLogin(data)    
  } 

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

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
          error={errors.email}
          autoCapitalize='none'
          onFocus={() => handleError(null, 'email')}
        /> 
        <Input 
          title="Senha" 
          name={password} 
          secure={true} 
          setData={setPassword} 
          error={errors.password}
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
