import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const FlagPostScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const reasons = ['Spam', 'Pornography', 'Hatred and bullying', 'Self-harm', 'Violent, gory and harmful content'];
  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Flag Post</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select a reason for flagging the post:</Text>
            {reasons.map((reason, index) => <TouchableOpacity key={index} style={styles.reasonButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.reasonButtonText}>{reason}</Text>
              </TouchableOpacity>)}
          </View>
        </View>
      </Modal>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  reasonButton: {
    backgroundColor: '#F194FF',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center'
  },
  reasonButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
export default FlagPostScreen;