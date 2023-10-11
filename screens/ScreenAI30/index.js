import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native';

const Screen = () => {
  const dummyData = {
    title: 'Dummy Title',
    description: 'This is a dummy description',
    createdBy: {
      profilePicture: 'https://tinyurl.com/42evm3m3',
      username: 'dummyUser',
      fullName: 'Dummy User',
      created: '2021-09-01'
    },
    content: 'This is the dummy content',
    comments: ['Comment 1', 'Comment 2', 'Comment 3']
  };
  return <SafeAreaView style={_styles.eGrYxIiA}>
      <ScrollView style={_styles.lXfIVhpO}>
        <Text style={_styles.lZBEMZlc}>{dummyData.title}</Text>
        <Text style={_styles.hTwjEUrs}>{dummyData.description}</Text>
        <View style={_styles.vjWTggmd}>
          <Image source={{
          uri: dummyData.createdBy.profilePicture
        }} style={_styles.jycJqwww} />
          <View style={_styles.shVzihsH}>
            <Text style={_styles.BfbgSKyb}>{dummyData.createdBy.username}</Text>
            <Text style={_styles.AZrAldou}>{dummyData.createdBy.fullName}</Text>
            <Text style={_styles.MUtvUJmH}>Created: {dummyData.createdBy.created}</Text>
          </View>
        </View>
        <Text style={_styles.jjwGzQfm}>{dummyData.content}</Text>
        <View style={_styles.IjCtiZcY}>
          <Text style={_styles.BmluSInk}>Comments</Text>
          {dummyData.comments.map((comment, index) => <Text key={index} style={_styles.vyIzReAW}>
              {comment}
            </Text>)}
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default Screen;

const _styles = StyleSheet.create({
  eGrYxIiA: {
    flex: 1,
    backgroundColor: "#fff"
  },
  lXfIVhpO: {
    padding: 20
  },
  lZBEMZlc: {
    fontSize: 24,
    fontWeight: "bold"
  },
  hTwjEUrs: {
    fontSize: 18,
    color: "#666"
  },
  vjWTggmd: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  jycJqwww: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  shVzihsH: {
    marginLeft: 10
  },
  BfbgSKyb: {
    fontSize: 16,
    fontWeight: "bold"
  },
  AZrAldou: {
    fontSize: 14,
    color: "#666"
  },
  MUtvUJmH: {
    fontSize: 12,
    color: "#999"
  },
  jjwGzQfm: {
    fontSize: 18,
    marginTop: 20
  },
  IjCtiZcY: {
    marginTop: 20
  },
  BmluSInk: {
    fontSize: 20,
    fontWeight: "bold"
  },
  vyIzReAW: {
    fontSize: 16,
    color: "#666",
    marginTop: 10
  }
});