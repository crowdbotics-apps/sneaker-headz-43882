import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Button } from 'react-native';

const SubscriptionScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.text}>
          Your subscription is ending in one week.
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="OK" onPress={() => {}} />
          <Button title="Subscribe" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});
export default SubscriptionScreen;