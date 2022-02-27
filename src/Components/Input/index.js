import { View, Text, TextInput} from 'react-native';

import styles from './styles'

export default function Input({ title, name, setData, secure }) {

  return (
    <View style={styles.container}>
     <Text style={styles.title}>{title}</Text>  
     <TextInput 
      secureTextEntry={secure}
      style={styles.input} 
      name={name} 
      value={name} 
      onChangeText={text => setData(text)}
     />      
    </View>
  );
}
