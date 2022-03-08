import { useState } from 'react'
import { Text, View, TouchableOpacity, Modal, SafeAreaView, FlatList } from 'react-native'

import { Entypo } from '@expo/vector-icons';

import styles from './styles'


export default function Select({ title, text, onChangeSelect, options, error }){
  const [txt, setTxt] = useState(text)
  const [selectd, setSelectd] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function renderOption(item){
    return (
      <TouchableOpacity style={styles.optionContainer} 
        onPress={() => {
          onChangeSelect(item)
          setTxt(item)
          setModalVisible(false)
          setSelectd(item)
        }}
        >
        <Text style={[styles.optionText, {fontWeight: item === selectd ? "bold" : "normal"}]}>{item}</Text>
        {
          item === selectd &&
          <Entypo name="check" size={24} color="black" />
        }
        
      </TouchableOpacity>
      
    )
  }

  return (
    <View style={styles.container}>
     <Text style={styles.title}>{title}</Text>
      <View style={styles.selectArea}>
       <TouchableOpacity style={styles.select} onPress={() => setModalVisible(true)}>   
          <Text style={styles.selectText} numberOfLines={1}>{txt}</Text>        
          <Entypo name="chevron-down" size={24} color="black" style={{ marginRight: 10}} />      
       </TouchableOpacity>
       <Modal 
        animationType='slide' 
        visible={modalVisible} 
        onRequestClose={() => 
        setModalVisible(false)}
       >
        <SafeAreaView>
          <View style={styles.modal}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Entypo name="chevron-left" size={28} color="black"  />  
            </TouchableOpacity> 
            <Text style={styles.selectText}>{txt}</Text>  
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalText}>Cancelar</Text>  
            </TouchableOpacity>           
          </View>

          <FlatList 
            data={options}
            keyExtractor={(item) => String(item)}
            renderItem={({item}) => renderOption(item)}
          />
        </SafeAreaView>       
       </Modal>
      </View>
      {error && (
        <Text style={styles.ErrorTitle}>
          {error}
        </Text>
      )}   
    </View>
  )
}