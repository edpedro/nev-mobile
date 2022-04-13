import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Text, View, KeyboardAvoidingView, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'

import Input from '../../Components/Input'
import Select from '../../Components/Select'

import { registerCards, updateCard } from '../../store/modules/creditCard/actions'

import styles from './styles'

const banks = ["Itau", "Santander", "Nubank", "Inter", "Bradesco", "Visa", 
"Mastercard", "Hipercard", "PicPay", "Original", "Banco PAN", "Caixa", "digio",
"Neon", "Mercado Pago", "Banco BV", "Bmg", "C6 Bank", "Next", "Ame Digital", "BTG Banking", "PagBank"]

const days = ["01","02","03","04","05","06","07","08","09","10","11",
"12", "13","14","15","16","17","18","19","20","21","22","23","24","25",
"26","27","28","29","30","31", "32"]

export default function RegisterCard({ route, navigation }){
  const dispatch = useDispatch()

  const { card } = route.params || {};
  
  const [name, setName] = useState("")
  const [limit, setLimit] = useState("")
  const [close, setClose] = useState("")
  const [win, setWin] = useState("")
  const [bank, setBank] = useState("")

  const [errors, setErrors] = useState({})

  useEffect(() => {

    if(card){
      setName(card.name)
      setLimit(card.limit)
      setClose(card.close)
      setWin(card.win)
      setBank(card.bank)
    }

  }, [card])

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

    if(card){
      dispatch(updateCard(data, card.id))
      navigation.navigate("Card")
    }else {     
      dispatch(registerCards(data))     
    }    
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
        <Select 
          title="Fechar dia" 
          text={"Selecione o dia"} 
          value={close}
          options={days} 
          error={errors.close}
          onChangeSelect={(item) => {
            setClose(item) 
            handleError(null, 'close')         
          }}         
        />     
        <Select 
          title="Vence dia" 
          text={"Selecione o dia"} 
          value={win}
          options={days} 
          error={errors.win}
          onChangeSelect={(item) => {
            setWin(item) 
            handleError(null, 'win')         
          }}         
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
        <Text style={styles.textButton}>{card ? "Atualizar" : "Adicionar"}</Text>
      </TouchableOpacity>
    </View>    
    </TouchableWithoutFeedback>
   
    </KeyboardAvoidingView>
  )
}