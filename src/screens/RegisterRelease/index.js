import { useState } from 'react'
import { Text, View, KeyboardAvoidingView, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';

import Input from '../../Components/Input'

import styles from './styles'

const incomeExpense = [{value: "receita"}, { value: "despesa"}]
const acountCard = [{value: "cartao"}, { value: "conta"}]

export default function RegisterRelease(){
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [data, setData] = useState("")
  const [category, setCategory] = useState("")
  const [operation, setOperation] = useState("")
  const [creditCard, setCreditCard] = useState("")
  const [type, setType] = useState("")

  function handleSubmit(){
    console.log("email", name)
    console.log("password", password)
  }

  function handleIncomeExpense(value) {
    setType(value)
  }
  function handleAcountCard(value) {
    setOperation(value)
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
          {incomeExpense.map((item, key) => {           
            return (
              <TouchableOpacity 
                key={key}
                onPress={() => handleIncomeExpense(item.value)}
                style={[
                  item.value === "receita" ? styles.income : styles.expense, 
                  item.value === type && styles.selectedType
                ]}
              >
                <AntDesign 
                  name={item.value === "receita" ? "plus": "minus"} 
                  size={24}
                  style={[{
                    color: item.value === "receita" ? "#058373": "#EC1C24"}, 
                    item.value === type && styles.selectedTypeIcon]}              
                 />
                  <Text style={[
                    item.value === "receita" ? styles.incomeTitle : styles.expenseTitle, 
                    item.value === type && styles.selectedTypeTitle]}
                    >
                    {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
                  </Text>            
              </TouchableOpacity>
            )
          })}          
        </View>     
        <Input title="Descrição" name={description} setData={setDescription}/>
        <Input title="Valor" name={value} setData={setValue}/>
        <Input title="Data" name={data} setData={setData}/> 

        <Text style={styles.acountCardTitle}>Cartão/Conta</Text>

        <View style={styles.acountCard}>
          {acountCard.map((item, key) => {
            return (
              <TouchableOpacity 
              key={key}
              onPress={() => handleAcountCard(item.value)}
              style={[styles.card, item.value === operation && styles.selectedOperation]}
              >
                {item.value === "cartao" 
                  ?
                  <Entypo  name="credit-card" size={20} color="black" />
                  :
                  <MaterialIcons name="account-balance" size={20} color="black" />
                }                
                <Text style={styles.cardTitle}>{item.value.charAt(0).toUpperCase() + item.value.slice(1)}</Text>            
              </TouchableOpacity>
            )
          })}         
        </View> 
        {operation === "cartao" && 
          <Input title="Bandeira" name={creditCard} setData={setCreditCard}/>
        }        
        <Input title="Categoria" name={category} setData={setCategory}/>

        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>
      </View>    
    </TouchableWithoutFeedback>
   
    </KeyboardAvoidingView>
  )
}