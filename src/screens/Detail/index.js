import { Text, View, TouchableOpacity } from 'react-native'

import User from '../../Components/User'

import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

import styles from './styles'

export default function Detail(){
  return (
    <View style={styles.container}>
      <User /> 

      <View style={styles.content}>
        <View style={styles.iconCard}>
          <FontAwesome name="credit-card" size={25} color="black" />
        </View>

        <Text style={styles.detailTitle}>Detalhe da compra</Text>

        <View style={styles.detailBody}>          
        <Text style={styles.contentTitle}>Internet</Text>
          <View style={styles.contentData}>
            <Text>Fev 02-2022</Text>
              <View style={styles.contentCircle}></View>
            <Text>Cartão</Text>
          </View>
          <View style={styles.contentData}>
            <Text>Mercadinho de cavaleiro</Text>              
          </View>
          <Text style={styles.contentValue}>R$ - 150,00</Text>       
        </View>

        <View style={styles.iconEditRemove}>
          <View style={styles.iconEdit}>
            <TouchableOpacity>
              <MaterialIcons name="mode-edit" size={35} color="black" />
            </TouchableOpacity>            
          </View>
          <View style={styles.iconRemove}>
            <TouchableOpacity>
              <MaterialIcons name="delete-forever" size={35} color="black" />
            </TouchableOpacity>           
          </View>
        </View>

        <View style={styles.goBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <TouchableOpacity>
            <Text style={styles.goBackTitle}>Voltar</Text>
          </TouchableOpacity>
                    
        </View>        
      </View>
    </View>
  )
}