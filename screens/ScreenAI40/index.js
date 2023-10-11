import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'John Doe',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  name: 'Jane Doe',
  image: 'https://tinyurl.com/42evm3m3'
} // Add more dummy data here
];

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.VjikinCB}>
      <View style={_styles.LLyCTnLN}>
        <Text style={_styles.RBVZCRtl}>Section 1:</Text>
        <TextInput placeholder="Group name" style={_styles.OwtBnfKu} />
        <TextInput placeholder="Group description" style={_styles.WEuRWXvH} />

        <Text style={_styles.AkdyARiG}>Section 2:</Text>
        <TextInput placeholder="Add people" style={_styles.EcOjPDSf} />
        <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.CjtTCYHj}>
              <Image source={{
          uri: item.image
        }} style={_styles.GNBqvNiq} />
              <Text style={_styles.GqLPLGoc}>{item.name}</Text>
            </View>} />
        <View style={_styles.hXrVBuri}>
          <Button title="Add Users" onPress={() => {}} />
          <Button title="Remove Users" onPress={() => {}} />
        </View>

        <Text style={_styles.QfHIsVzp}>Section 3:</Text>
        <View style={_styles.dchJGdGF}>
          <Button title="Create Group" onPress={() => {}} />
          <Button title="Cancel" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  VjikinCB: {
    flex: 1,
    backgroundColor: "#fff"
  },
  LLyCTnLN: {
    padding: 20
  },
  RBVZCRtl: {
    fontSize: 20,
    fontWeight: "bold"
  },
  OwtBnfKu: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
  WEuRWXvH: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
  AkdyARiG: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  EcOjPDSf: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
  CjtTCYHj: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  GNBqvNiq: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  GqLPLGoc: {
    marginLeft: 10
  },
  hXrVBuri: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  QfHIsVzp: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  dchJGdGF: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});