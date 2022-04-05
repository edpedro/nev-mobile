import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from 'react-redux'

import { deleteTransaction } from '../../store/modules/transaction/actions'

import styles from './styles'

export default function ModalDeleteTrans({ modalVisible, setModalVisible, id }) {
  const dispatch = useDispatch()

  function handleDeleteTrans(){
    dispatch(deleteTransaction(id))
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
            <Text style={styles.modalText}>Deseja deletar Transação!</Text>

            <View style={styles.modalViewButton}>
              <TouchableOpacity
              style={styles.buttonCancelar}             
              onPress={() => setModalVisible(!modalVisible)}
              >
              <Text style={styles.textStyle}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity            
              onPress={() => {
                handleDeleteTrans(),
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
