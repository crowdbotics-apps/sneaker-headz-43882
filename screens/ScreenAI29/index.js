import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList } from 'react-native';

const ScreenComponent = () => {
  const [search, setSearch] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const dummyData = [{
    id: '1',
    title: 'Title 1',
    description: 'Description 1',
    createdBy: 'User 1',
    fullName: 'Full Name 1',
    created: '2021-09-01'
  } // More dummy data...
  ];
  return <SafeAreaView style={_styles.hhHiXrMO}>
      <TextInput style={_styles.WMsFjJcl} onChangeText={text => setSearch(text)} value={search} placeholder="Search" />
      <Text>Filter by date</Text>
      <Text>From</Text>
      <TextInput style={_styles.tutKnFym} onChangeText={date => setFromDate(date)} value={fromDate} placeholder="YYYY-MM-DD" />
      <Text>To</Text>
      <TextInput style={_styles.tBHqVEMO} onChangeText={date => setToDate(date)} value={toDate} placeholder="YYYY-MM-DD" />
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.sJNvsvcq}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>Created by {item.createdBy}</Text>
            <Text>Username: {item.fullName}</Text>
            <Text>Created: {item.created}</Text>
            <Button title="Read more" onPress={() => {}} />
          </View>} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  hhHiXrMO: {
    flex: 1,
    padding: 20
  },
  WMsFjJcl: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  tutKnFym: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  tBHqVEMO: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  sJNvsvcq: {
    marginBottom: 20
  }
});