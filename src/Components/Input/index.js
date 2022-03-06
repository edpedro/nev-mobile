import { View, Text, TextInput} from 'react-native';

import styles from './styles'

export default function Input({ title, name, setData, secure, autoCapitalize, error, ...props }) {

  return (
    <View style={styles.container}>
     <Text style={styles.title}>{title}</Text>  
     <TextInput 
      autoCapitalize={autoCapitalize}
      secureTextEntry={secure}
      style={[styles.input, { borderColor: error ? "red" : "#fff"}]} 
      name={name} 
      value={name} 
      onChangeText={text => setData(text)}
      {...props}
     />
     {error && (
        <Text style={styles.ErrorTitle}>
          {error}
        </Text>
      )}      
    </View>
  );
}
