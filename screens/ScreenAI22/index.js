import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, FlatList } from 'react-native';

const App = () => {
  const [search, setSearch] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [sizeFrom, setSizeFrom] = useState('');
  const [sizeTo, setSizeTo] = useState('');
  const sneakers = [{
    id: '1',
    name: 'Sneaker 1',
    type: 'Casual',
    description: 'This is a casual sneaker',
    price: '$100',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    name: 'Sneaker 2',
    type: 'Skater',
    description: 'This is a skater sneaker',
    price: '$120',
    image: 'https://tinyurl.com/42evm3m3'
  }];
  return <SafeAreaView style={_styles.FeQfVThZ}>
      <View>
        <TextInput placeholder="Search" value={search} onChangeText={setSearch} style={_styles.qaHwBkQf} />
        <Text>Display Types</Text>
        <Text>Type 1, for example casual or skater</Text>
        <Text>Type n, for example casual or skater</Text>
        <TextInput placeholder="Price From" value={priceFrom} onChangeText={setPriceFrom} style={_styles.TthtitId} keyboardType="numeric" />
        <TextInput placeholder="Price To" value={priceTo} onChangeText={setPriceTo} style={_styles.SReZbbuy} keyboardType="numeric" />
        <TextInput placeholder="Size From" value={sizeFrom} onChangeText={setSizeFrom} style={_styles.ExUiFHiy} keyboardType="numeric" />
        <TextInput placeholder="Size To" value={sizeTo} onChangeText={setSizeTo} style={_styles.APRVToPV} keyboardType="numeric" />
      </View>
      <FlatList data={sneakers} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.wSklUvLX}>
            <Image source={{
        uri: item.image
      }} style={_styles.OOtsHwSf} />
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <Button title="Show More" onPress={() => {}} />
          </View>} />
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  FeQfVThZ: {
    flex: 1,
    padding: 20
  },
  qaHwBkQf: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  TthtitId: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  SReZbbuy: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  ExUiFHiy: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  APRVToPV: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  wSklUvLX: {
    marginVertical: 10
  },
  OOtsHwSf: {
    width: "100%",
    height: 200
  }
});