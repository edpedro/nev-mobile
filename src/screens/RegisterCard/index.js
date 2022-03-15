import { useState, useEffect } from 'react'
import { Text, View, KeyboardAvoidingView, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'

import Input from '../../Components/Input'
import Select from '../../Components/Select'

import Loading from '../../screens/Loading'

import { useCreditCard } from '../../contexts/CreditCard'

import styles from './styles'

const banks = ["Itau", "Santander", "Nubank", "Inter", "Bradesco"]

export default function RegisterCard({ route, navigation }){
  const { handleRegisterCard, isLoading } = useCreditCard()

  const { creditCards } = route.params || {};
  
  const [name, setName] = useState("")
  const [limit, setLimit] = useState("")
  const [close, setClose] = useState("")
  const [win, setWin] = useState("")
  const [bank, setBank] = useState("")

  const [errors, setErrors] = useState({})

  useEffect(() => {     
    
    if(creditCards) {
      setName(creditCards.name)
      setLimit(creditCards.limit)
      setClose(creditCards.close)
      setWin(creditCards.win)
      setBank(creditCards.bank)
      
    }   
  }, [creditCards])
 
  function validate(){
    Keyboard.dismiss()
    let isValid = true
    if(!name){
      handleError("Por favor insira nome", 'name')
      isValid = false
    }
    if(!limit){
      handleError("Por favor insira limite", 'limit')
      isValid = false
    }
    if(!close || String(close.length) <= 1){
      handleError("Por favor insira dia fechar.. Ex 00", 'close')
      isValid = false
    }
    if(!win || String(win.length) <= 1){
      handleError("Por favor insira dia vence.. Ex 00", 'win')
      isValid = false
    }
    if(!bank){
      handleError("Por favor insira banco", 'bank')
      isValid = false
    }

    if(isValid){
      handleSubmit()
    }
  }

  function handleSubmit(){
    const newLimit = Number(limit)
    const data = {
      name,
      limit: newLimit,
      close,
      win,
      bank
    }
      handleRegisterCard(data)
      navigation.navigate("Inicio")
  } 

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  if(isLoading){
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
        <Text style={styles.title}>Cadastrar Cartão</Text>      
        <Input 
          title="Nome da conta" 
          error={errors.name} 
          name={name}          
          setData={setName}
          onFocus={() => handleError(null, 'name')}
        />
        <Input 
          title="Limite" 
          error={errors.limit} 
          keyboardType="numeric" 
          name={limit} 
          setData={setLimit}
          onFocus={() => handleError(null, 'limit')}
        />
        <Input 
          title="Fechar dia" 
          error={errors.close} 
          maxLength={2} 
          keyboardType="numeric" 
          name={close} 
          setData={setClose}
          onFocus={() => handleError(null, 'close')}
        />
        <Input 
          title="Vence dia" 
          error={errors.win} 
          maxLength={2} 
          keyboardType="numeric" 
          name={win} 
          setData={setWin}
          onFocus={() => handleError(null, 'win')}
        />
       
        <Select 
          title="Bandeira/instituição" 
          text={"Selecione o banco"} 
          value={bank}
          options={banks} 
          error={errors.bank}
          onChangeSelect={(item) => {
            setBank(item) 
            handleError(null, 'bank')         
          }}         
        />

        <TouchableOpacity style={styles.button} onPress={() => validate()}>
        <Text style={styles.textButton}>Adicionar</Text>
      </TouchableOpacity>
    </View>    
    </TouchableWithoutFeedback>
   
    </KeyboardAvoidingView>
  )
}