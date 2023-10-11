import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet, DatePickerIOS } from 'react-native';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.searchBar} onChangeText={text => setSearchText(text)} value={searchText} placeholder="Search..." />
      <Text style={styles.filterText}>Filter by date</Text>
      <Text>From</Text>
      <DatePickerIOS date={fromDate} onDateChange={setFromDate} />
      <Text>To</Text>
      <DatePickerIOS date={toDate} onDateChange={setToDate} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Exclusive Content Title</Text>
        <Text style={styles.description}>This is a short summary of the exclusive content.</Text>
        <Text style={styles.created}>Created on: {new Date().toLocaleDateString()}</Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Button title="See more" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10
  },
  filterText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  contentContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    marginTop: 10,
    fontSize: 16
  },
  created: {
    marginTop: 10,
    fontSize: 14,
    color: 'gray'
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
});
export default App;