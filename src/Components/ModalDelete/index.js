import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from 'react-redux'

import { deleteCard } from '../../store/modules/creditCard/actions'

import styles from './styles'

export default function ModalDelete({ modalVisible, setModalVisible, idCard, navigation }) {
  const dispatch = useDispatch()

  function handleDeleteCard(){
    dispatch(deleteCard(idCard))
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => 
          setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Deseja deletar cartão!</Text>

            <View style={styles.modalViewButton}>
              <TouchableOpacity
              style={styles.buttonCancelar}             
              onPress={() => setModalVisible(!modalVisible)}
              >
              <Text style={styles.textStyle}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity            
              onPress={() => {
                handleDeleteCard(),
                setModalVisible(!modalVisible)             
              }}
            >
              <Text style={styles.textStyle}>Deletar</Text>
            </TouchableOpacity>
            </View>
           
          </View>
        </View>
      </Modal>     
    </View>
  );
};
