import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native';
import Video from 'react-native-video';

const ScreenComponent = () => {
  const dummyData = {
    title: 'Dummy Title',
    description: 'This is a dummy description',
    created: new Date().toLocaleDateString(),
    content: {
      text: 'This is some dummy content',
      image: 'https://tinyurl.com/42evm3m3',
      video: 'https://tinyurl.com/42evm3m3'
    },
    comments: ['Comment 1', 'Comment 2', 'Comment 3']
  };
  return <SafeAreaView style={_styles.cmYHkAyJ}>
      <ScrollView style={_styles.tmpQNFsr}>
        <View style={_styles.coCkkpVB}>
          <Text style={_styles.TwPZWvIX}>{dummyData.title}</Text>
          <Text style={_styles.UxWCTIGh}>{dummyData.description}</Text>
          <Text style={_styles.qjbDGAzG}>Created: {dummyData.created}</Text>
        </View>

        <View style={_styles.IJaGrCvC}>
          <Text style={_styles.jWWmBCQI}>{dummyData.content.text}</Text>
          <Image source={{
          uri: dummyData.content.image
        }} style={_styles.ErtwVYyc} />
          <Video source={{
          uri: dummyData.content.video
        }} style={_styles.uziteiHZ} />
        </View>

        <View>
          <Text style={_styles.DUBVLNBq}>Comments</Text>
          {dummyData.comments.map((comment, index) => <Text key={index} style={_styles.vvqgrSKb}>
              {comment}
            </Text>)}
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  cmYHkAyJ: {
    flex: 1,
    backgroundColor: "#fff"
  },
  tmpQNFsr: {
    padding: 20
  },
  coCkkpVB: {
    marginBottom: 20
  },
  TwPZWvIX: {
    fontSize: 24,
    fontWeight: "bold"
  },
  UxWCTIGh: {
    fontSize: 18,
    color: "#666"
  },
  qjbDGAzG: {
    fontSize: 14,
    color: "#999"
  },
  IJaGrCvC: {
    marginBottom: 20
  },
  jWWmBCQI: {
    fontSize: 18
  },
  ErtwVYyc: {
    width: "100%",
    height: 200
  },
  uziteiHZ: {
    width: "100%",
    height: 200
  },
  DUBVLNBq: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  vvqgrSKb: {
    fontSize: 18,
    marginBottom: 10
  }
});