import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, FlatList } from 'react-native';
const sneakersData = [{
  id: '1',
  name: 'Sneaker 1',
  type: 'Casual',
  description: 'This is a casual sneaker.',
  price: '$100',
  image: 'https://tinyurl.com/42evm3m3'
} // ... add more sneakers data
];

const Screen = () => {
  return <SafeAreaView style={_styles.AkKGopCb}>
      <View style={_styles.tLXXoEhi}>
        <Button title="My Favorite" onPress={() => {}} />
        <TextInput placeholder="Search" style={_styles.nvmEhLCg} />
        <Text>Display types</Text>
        <TextInput placeholder="Type 1" style={_styles.lClpdnWU} />
        <TextInput placeholder="Type n" style={_styles.ORIhUamd} />
        <Text>Set price range</Text>
        <TextInput placeholder="From" style={_styles.fWGBJHIj} />
        <TextInput placeholder="To" style={_styles.spXmCnOU} />
        <Text>Set sneaker size</Text>
        <TextInput placeholder="From" style={_styles.yPUFyEzs} />
        <TextInput placeholder="To" style={_styles.uNkDjDIP} />
      </View>
      <FlatList data={sneakersData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.ShOkcdQV}>
            <Image source={{
        uri: item.image
      }} style={_styles.ghoXgjqo} />
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <Button title="Show More" onPress={() => {}} />
          </View>} />
    </SafeAreaView>;
};

export default Screen;

const _styles = StyleSheet.create({
  AkKGopCb: {
    flex: 1,
    backgroundColor: "#fff"
  },
  tLXXoEhi: {
    padding: 20
  },
  nvmEhLCg: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  lClpdnWU: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  ORIhUamd: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  fWGBJHIj: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  spXmCnOU: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  yPUFyEzs: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  uNkDjDIP: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  ShOkcdQV: {
    padding: 20
  },
  ghoXgjqo: {
    width: 100,
    height: 100
  }
});