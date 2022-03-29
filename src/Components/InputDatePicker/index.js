import { useCallback, useState } from 'react'
import { View, Text, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles'

export default function InputDatePicker({ 
  title, 
  name, 
  setData,
  handleError,
  ...props 
}) {

  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const handleDateChanged = useCallback((event, selectedDate) => {
    const currentDate = selectedDate || data; 
      setShow(Platform.OS === 'ios')    
      setData(currentDate)  
  },
    [],
  );

  function showMode(currentMode){
    setShow(true)
    setMode(currentMode)
  }

  return (
    <View style={styles.container}>
     <Text style={styles.title}>{title}</Text>
      <View style={styles.inputArea}>
        <TextInput       
        style={styles.input} 
        name={name} 
        value={name.toLocaleDateString()} 
        onFocus={() => { showMode("date") }}         
        {...props}
      />    

      {show &&
        (
          <DateTimePicker 
          testID="dateTimePicker"
          locale="pt-BR"     
          mode={mode}
          value={name} 
          display="calendar"
          onChange={handleDateChanged}         
          />
        )        
      }
      </View>      
    </View>
  );
}
