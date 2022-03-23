import { View, Image, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux'

import styles from './styles'

import Logo from '../../assets/logo.png'

export default function Loading() {
  const { loading } = useSelector((state) => state.loadings)
 
  return (
    <>
      {loading && 
       <View style={styles.container}>
        <Image source={Logo} style={styles.logo}/> 
        <ActivityIndicator size="large" color="#ffffff"/>     
        </View>   
      }
    </>   
  );
}
