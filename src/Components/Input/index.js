import { View, Text, TextInput, TouchableOpacity} from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 

import styles from './styles'

export default function Input({ 
  title, 
  name, 
  setData, 
  secure, 
  autoCapitalize, 
  error, 
  iconName,
  setHidePass, 
  ...props 
}) {

  return (
    <View style={styles.container}>
     <Text style={styles.title}>{title}</Text>
      <View style={styles.inputArea}>
        <TextInput 
        autoCapitalize={autoCapitalize}
        secureTextEntry={secure}
        style={[styles.input, { borderColor: error ? "red" : "#fff"}]} 
        name={name} 
        value={name} 
        onChangeText={text => setData(text.trim())}
        {...props}
      />
      {
        title === "Senha" ?
        <View style={styles.icon}>
           <TouchableOpacity   onPress={() => setHidePass(!secure)}>
            {secure ?
              <Ionicons name={iconName} size={30} color="black" />
              :
              <Ionicons name={iconName} size={30} color="black" />
            }            
          </TouchableOpacity>
        </View>
        
        :
        <View style={styles.icon}>          
          <Ionicons name={iconName} size={30} color="black" />          
        </View>     
      }
       
    
      </View> 
      {error && (
        <Text style={styles.ErrorTitle}>
          {error}
        </Text>
      )}      
    </View>
  );
}
