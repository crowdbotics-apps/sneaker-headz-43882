import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, ScrollView, TouchableOpacity } from 'react-native';

const SneakerScreen = () => {
  const sneakerData = {
    name: 'Air Jordan 1',
    type: 'Casual',
    description: 'High quality sneaker',
    sizes: ['7', '8', '9', '10', '11'],
    images: Array(6).fill('https://tinyurl.com/42evm3m3'),
    purchaseLink: 'https://www.nike.com',
    price: '$200'
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.title}>Purchase sneakers</Text>
          <TouchableOpacity onPress={() => Linking.openURL(sneakerData.purchaseLink)}>
            <Text style={styles.link}>Purchase Link</Text>
          </TouchableOpacity>
          <Text style={styles.price}>{sneakerData.price}</Text>
        </View>

        <View style={styles.section}>
          <Image style={styles.image} source={{
          uri: sneakerData.images[0]
        }} />
          <Text style={styles.title}>{sneakerData.name}</Text>
          <Text style={styles.subtitle}>{sneakerData.type}</Text>
          <Text style={styles.description}>{sneakerData.description}</Text>
          <Text style={styles.title}>Available sizes</Text>
          <Text style={styles.description}>{sneakerData.sizes.join(', ')}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Sneakers - photographs</Text>
          <View style={styles.grid}>
            {sneakerData.images.map((image, index) => <TouchableOpacity key={index} onPress={() => Linking.openURL(image)}>
                <Image style={styles.gridImage} source={{
              uri: image
            }} />
              </TouchableOpacity>)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  section: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  link: {
    color: 'blue',
    marginBottom: 10
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  gridImage: {
    width: '48%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10
  }
});
export default SneakerScreen;