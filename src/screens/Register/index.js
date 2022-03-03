import { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Input from '../../Components/Input';

import styles from './styles'

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(){
    console.log("name", name)
    console.log("email", email)
    console.log("password", password)
  }
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
    >   
    <View style={styles.content}>
      <Text style={styles.title}>Controle Financeiro</Text>

     <Input title="Nome"  name={name} setData={setName}/>
     <Input title="Email" name={email} setData={setEmail}/> 
     <Input title="Senha" name={password} secure={true} setData={setPassword}/>  

     <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
       <Text style={styles.textButton}>Cadastrar</Text>
     </TouchableOpacity>

      <View style={styles.messageView}>
        <Text style={styles.messageText}>Já possuir um conta?</Text>
      
        <TouchableOpacity>
          <Text style={styles.messageButtonText}>Login</Text>
      </TouchableOpacity>
      </View>    
    </View>
    
 
  </KeyboardAvoidingView>
  );
}
