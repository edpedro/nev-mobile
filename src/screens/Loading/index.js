import { View, Image, ActivityIndicator } from 'react-native';

import styles from './styles'

import Logo from '../../assets/logo.png'

export default function Loading() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo}/> 
      <ActivityIndicator size="large" color="#ffffff"/>     
    </View>
  );
}
