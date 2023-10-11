import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { DatePickerIOS } from '@react-native-community/datetimepicker';

const ScreenComponent = () => {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [search, setSearch] = useState('');
  const dummyData = [{
    title: 'Content Title 1',
    description: 'This is a short summary of the content.',
    created: new Date().toDateString()
  }, {
    title: 'Content Title 2',
    description: 'This is another short summary of the content.',
    created: new Date().toDateString()
  }];
  return <SafeAreaView style={styles.container}>
      <Button title="Create Content" onPress={() => {}} />
      <TextInput style={styles.searchBar} placeholder="Search..." onChangeText={setSearch} value={search} />
      <Text>Filter by date</Text>
      <Text>From</Text>
      <DatePickerIOS date={dateFrom} onDateChange={setDateFrom} />
      <Text>To</Text>
      <DatePickerIOS date={dateTo} onDateChange={setDateTo} />
      <ScrollView>
        {dummyData.map((data, index) => <View key={index} style={styles.contentContainer}>
            <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>
            <Text style={styles.created}>Created: {data.created}</Text>
            <Button title="Read More" onPress={() => {}} />
            <Button title="Remove" onPress={() => {}} />
          </View>)}
      </ScrollView>
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
    marginBottom: 10
  },
  contentContainer: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16
  },
  created: {
    fontSize: 14,
    color: 'gray'
  }
});
export default ScreenComponent;