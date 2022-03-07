import { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { useAuth } from '../../contexts/Auth'

import Input from '../../Components/Input';

import styles from './styles'

export default function Register({ navigation }) {
  const { handleRegister } = useAuth()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [hidePass, setHidePass] = useState(true)

  function validate(){
    Keyboard.dismiss()
    let isValid = true
    if(!name){
      handleError("Por favor insira nome", 'name')
      isValid = false
    }
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
      name,
      email,
      password,
    } 
    handleRegister(data)
  }

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
    >   
    <View style={styles.content}>
      <Text style={styles.title}>Controle Financeiro</Text>

     <Input 
      title="Nome"  
      name={name} 
      iconName='person-circle'
      setData={setName}
      error={errors.name}
      autoCapitalize='sentences'
      onFocus={() => handleError(null, 'name')}
     />
     <Input 
       title="Email" 
       name={email} 
       setData={setEmail} 
       iconName='mail'
       error={errors.email}
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
       <Text style={styles.textButton}>Cadastrar</Text>
     </TouchableOpacity>

      <View style={styles.messageView}>
        <Text style={styles.messageText}>Já possuir um conta?</Text>
      
        <TouchableOpacity onPress={() => navigation.replace("Login")}>
          <Text style={styles.messageButtonText}>Login</Text>
      </TouchableOpacity>
      </View>    
    </View>
    
 
  </KeyboardAvoidingView>
  );
}
