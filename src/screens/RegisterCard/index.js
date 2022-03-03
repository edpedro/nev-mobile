import { useState } from 'react'
import { Text, View, KeyboardAvoidingView, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'

import Input from '../../Components/Input'

import styles from './styles'

export default function RegisterCard(){
  const [name, setName] = useState("")
  const [limit, setLimit] = useState("")
  const [close, setClose] = useState("")
  const [win, setWin] = useState("")
  const [bank, setBank] = useState("")

  function handleSubmit(){
    console.log("email", name)
    console.log("password", password)
  }

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}   
    style={styles.container}
    > 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.content}>
        <Text style={styles.title}>Cadastrar Cartão</Text>      
        <Input title="Nome da conta" name={name} setData={setName}/>
        <Input title="Limite" name={limit} setData={setLimit}/>
        <Input title="Fechar dia" name={close} setData={setClose}/>
        <Input title="Vence dia" name={win} setData={setWin}/>
        <Input title="Bandeira/instituição" name={bank} setData={setBank}/>

        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.textButton}>Adicionar</Text>
      </TouchableOpacity>
    </View>    
    </TouchableWithoutFeedback>
   
    </KeyboardAvoidingView>
  )
}