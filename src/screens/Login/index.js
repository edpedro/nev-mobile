import { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useAuth } from '../../contexts/Auth'


import Input from '../../Components/Input';

import styles from './styles'

export default function Login({ navigation }) {
  const { handleLogin } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(){
    const data = {
      email,
      password
    }
    handleLogin(data)
  } 
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
    > 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.content}>
        <Text style={styles.title}>Controle Financeiro</Text>

        <Input title="Email" name={email} setData={setEmail}/> 
        <Input title="Senha" name={password} secure={true} setData={setPassword}/>  

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
