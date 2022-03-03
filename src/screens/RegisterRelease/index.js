import { useState } from 'react'
import { Text, View, KeyboardAvoidingView, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';

import Input from '../../Components/Input'

import styles from './styles'

export default function RegisterRelease(){
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
        <Text style={styles.title}>Cadastrar Lançamento</Text> 
        <View style={styles.grid}>
          <TouchableOpacity style={styles.income}>
            <AntDesign name="plus" size={24} color="#058373" />
            <Text style={styles.incomeTitle}>Receita</Text>            
          </TouchableOpacity>
          <TouchableOpacity style={styles.expense}> 
            <AntDesign name="minus" size={24} color="#EC1C24" />
            <Text style={styles.expenseTitle}>Despesa</Text>           
          </TouchableOpacity>
        </View>     
        <Input title="Descrição" name={name} setData={setName}/>
        <Input title="Valor" name={limit} setData={setLimit}/>
        <Input title="Data" name={close} setData={setClose}/> 

        <Text style={styles.acountCardTitle}>Cartão/Conta</Text>

        <View style={styles.acountCard}>          
          <TouchableOpacity style={styles.card}>
            <Entypo  name="credit-card" size={20} color="black" />
            <Text style={styles.cardTitle}>Cartão</Text>            
          </TouchableOpacity>
          <TouchableOpacity style={styles.account}> 
            <MaterialIcons name="account-balance" size={20} color="black" />
            <Text style={styles.accountTitle}>Conta</Text>           
          </TouchableOpacity>
        </View>         
        <Input title="Categoria" name={bank} setData={setBank}/>

        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>
      </View>    
    </TouchableWithoutFeedback>
   
    </KeyboardAvoidingView>
  )
}