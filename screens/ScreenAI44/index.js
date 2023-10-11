import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Button, Alert } from 'react-native';

const App = () => {
  const handleDeleteAccount = () => {
    Alert.alert('Delete Account', 'Are you sure you want to delete your account?', [{
      text: 'Cancel'
    }, {
      text: 'OK'
    }]);
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [{
      text: 'Cancel'
    }, {
      text: 'OK'
    }]);
  };

  return <SafeAreaView style={_styles.xzHMRdlt}>
      <View style={_styles.DCrQMVlx}>
        <Button title="Profile Information" onPress={() => {}} />
        <Button title="Subscription" onPress={() => {}} />
        <Button title="Manage Payments" onPress={() => {}} />
        <Button title="Payments" onPress={() => {}} />
        <Button title="Payments History" onPress={() => {}} />
        <Button title="Send Feedback" onPress={() => {}} />
        <Button title="Change Password" onPress={() => {}} />
        <Button title="Invite Friends" onPress={() => {}} />
        <Button title="Terms and Conditions" onPress={() => {}} />
        <Button title="Privacy Policy" onPress={() => {}} />
        <Button title="Delete Account" onPress={handleDeleteAccount} color="red" />
        <Button title="Logout" onPress={handleLogout} color="blue" />
      </View>
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  xzHMRdlt: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  DCrQMVlx: {
    width: "80%"
  }
});