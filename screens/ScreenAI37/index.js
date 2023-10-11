import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

  const handleUploadImage = () => {
    setImages([...images, 'https://tinyurl.com/42evm3m3']);
  };

  const handleRemoveImage = index => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleCreateContent = () => {
    setTitle('');
    setDescription('');
    setContent('');
    setImages([]);
  };

  return <SafeAreaView style={_styles.bngVLoaf}>
      <ScrollView>
        <Text>Title</Text>
        <TextInput style={_styles.tXHyucVE} onChangeText={text => setTitle(text)} value={title} />

        <Text>Description</Text>
        <TextInput style={_styles.RqaFcINr} onChangeText={text => setDescription(text)} value={description} multiline />

        <Text>Content</Text>
        <TextInput style={_styles.pwRRbBrl} onChangeText={text => setContent(text)} value={content} multiline />

        <Button title="Upload Image" onPress={handleUploadImage} />

        {images.map((image, index) => <View key={index} style={_styles.vAOHwrQZ}>
            <Image source={{
          uri: image
        }} style={_styles.yOSGsJqk} />
            <Button title="Remove" onPress={() => handleRemoveImage(index)} />
          </View>)}

        <Button title="Create Content" onPress={handleCreateContent} />
        <Button title="Cancel" onPress={handleCreateContent} />
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  bngVLoaf: {
    flex: 1,
    padding: 20
  },
  tXHyucVE: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  RqaFcINr: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  pwRRbBrl: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  vAOHwrQZ: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  yOSGsJqk: {
    width: 100,
    height: 100,
    marginRight: 20
  }
});