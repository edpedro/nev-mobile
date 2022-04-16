import { useEffect, useState } from 'react'
import { Text, View, KeyboardAvoidingView, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment';

import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';

import Input from '../../Components/Input'
import Select from '../../Components/Select';
import InputDatePicker from '../../Components/InputDatePicker';

import { registerTransaction, updateTransaction } from '../../store/modules/transaction/actions'

import styles from './styles'

const incomeExpense = [{value: "receita"}, { value: "despesa"}]
const acountCard = [{value: "cartao"}, { value: "conta"}]

const categorys = ["Alimentação", "Assinaturas e serviços", "Bares e restaurantes", "Casa", "Compras",
"Cuidados pessoais","Dívidas e empréstimos","Família e filhos","Impostos e Taxas","Investimentos",
"Lazer e hobbies","Mercado","Pagamento de fatura","Pets","Roupas","Saúde", "Salario", "Outros"
]

export default function RegisterRelease({ route }){
  const { cards } = useSelector((state) => state.creditCards)
  const dispatch = useDispatch()

  const { showTrans } = route.params || {}

  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")  
  const [category, setCategory] = useState("")
  const [operation, setOperation] = useState("")
  const [creditCard, setCreditCard] = useState(null)
  const [card, setCard] = useState("")
  const [type, setType] = useState("")
  const [data, setData] = useState(new Date())

  const [errors, setErrors] = useState({})

  const [cardsName, setCardName] = useState("") 

  function validate(){
    Keyboard.dismiss()
    let isValid = true
    if(!description){
      handleError("Por favor insira descrição", 'description')
      isValid = false
    }
    if(!value){
      handleError("Por favor insira valor", 'value')
      isValid = false
    }
    if(!category){
      handleError("Por favor insira a categoria", 'category')
      isValid = false
    }
    if(!operation){
      handleError("Por favor insira a operação", 'operation')
      isValid = false
    }
    if(operation === "cartao"){
      if(!card){
        handleError("Por favor insira banco", 'card')
        isValid = false
      }
    }   
    if(!data){
      handleError("Por favor insira data", 'data')
      isValid = false
    }
    if(!type){
      handleError("Por favor insira Receita ou Despesa", 'type')
      isValid = false
    }

    if(isValid){
      handleSubmit()
    }
  }

    
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  function handleIncomeExpense(value) {
    setType(value)
  }
  function handleAcountCard(value) {
    setOperation(value) 
  }

  function handleSubmit(){  
    const newDate = moment(data).format("YYYY-MM-DD")
    const newValue = handleNumberCommas(value)

    const dataForm = {
      description,
      value: newValue,
      data: newDate,
      category,
      operation,
      type,
      creditCard
    }
    console.log(dataForm)
    if(!showTrans){
      dispatch(registerTransaction(dataForm))
    }else{
      dispatch(updateTransaction(dataForm, showTrans.id))
    }   
   
  }

  useEffect(() => {
    if(showTrans){
     const newData = new Date(showTrans.data)        

     setDescription(showTrans.description)
     setValue(showTrans.value)  
     setCategory(showTrans.category)
     setOperation(showTrans.operation)    
     setType(showTrans.type)     
     setData(moment(newData).add(1, 'days').toDate())

     if(showTrans.creditCard){
      setCreditCard(showTrans.creditCard.id) 
      setCard(showTrans.creditCard.bank)  
     }

    } 
   
    
  }, [showTrans])

  useEffect(() => {
    FilterOperation()
    FilterCardName() 
  },[operation, card])

  function FilterOperation(){
    if(operation === "cartao"){
      const filterCard = cards.filter((item) => {
      return item.bank === card
    })
    if(filterCard[0]){
      setCreditCard(filterCard[0].id)
    }
      
    }else{
      setCreditCard(null)
    }  
  }

  function FilterCardName(){
    const banks = []
    for (let index = 0; index < cards.length; index++) {            
      banks.push(cards[index].bank)
    }
    setCardName(banks)
  }


  function handleNumberCommas(value){
    let parts = value.toString().split(",");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  }
  
  
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}   
    style={styles.container}   
    > 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>      
        <View style={styles.content}>
          <Text style={styles.title}>Cadastrar Lançamento</Text> 
          <View style={styles.grid}>
            {incomeExpense.map((item, key) => {           
              return (
                <TouchableOpacity 
                  key={key}
                  onPress={() => {
                    handleIncomeExpense(item.value), 
                    handleError(null, 'type')}}               
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
          {errors && (
            <Text style={styles.ErrorTitle}>
              {errors.type}
            </Text>
          )}    
          <Input 
          title="Descrição" 
          error={errors.description} 
          name={description} 
          setData={setDescription}
          onFocus={() => handleError(null, 'description')}
          />
          <Input 
            title="Valor" 
            error={errors.value} 
            keyboardType='numeric'
            name={value} 
            setData={setValue}
            onFocus={() => handleError(null, 'value')}
          />       
          <InputDatePicker 
            title="Data"
            setData={setData}  
            error={errors.data} 
            name={data}
            handleError={handleError}
          />   

          <Text style={styles.acountCardTitle}>Cartão/Conta</Text>
          <View style={styles.acountCard}>
            {acountCard.map((item, key) => {
              return (
                <TouchableOpacity 
                key={key}
                onPress={() => {handleAcountCard(item.value)}}
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
          {errors && (
            <Text style={styles.ErrorTitle}>
              {errors.operation}
            </Text>
          )}    
          {operation === "cartao" &&            
              <Select 
              title="Bandeira" 
              text={"Selecione o banco"} 
              value={card}
              options={cardsName} 
              error={errors.card}
              onChangeSelect={(item) => {                
                setCard(item) 
                handleError(null, 'card')         
              }}         
            />     
          }      
          <Select 
            title="Categoria" 
            text={"Selecione a categoria"} 
            value={category}
            options={categorys} 
            error={errors.category}
            onChangeSelect={(item) => {
              setCategory(item) 
              handleError(null, 'close')         
            }}         
          />     

          <TouchableOpacity style={styles.button} onPress={() => validate()}>
            <Text style={styles.textButton}>{showTrans ? "Atualizar" : "Adicionar"}</Text>
          </TouchableOpacity>
          
        </View>    
      </ScrollView>
    </TouchableWithoutFeedback>
   
  </KeyboardAvoidingView>
  )
}