import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View } from 'react-native';

const ChangePasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = () => {// Handle password change logic here
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={setOldPassword} value={oldPassword} placeholder="Old Password" secureTextEntry />
      <TextInput style={styles.input} onChangeText={setNewPassword} value={newPassword} placeholder="New Password" secureTextEntry />
      <View style={styles.buttonContainer}>
        <Button title="Change Password" onPress={handlePasswordChange} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 8
  },
  buttonContainer: {
    marginTop: 20
  }
});
export default ChangePasswordScreen;