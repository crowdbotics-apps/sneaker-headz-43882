import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SubscriptionScreen = () => {
  const tiers = [{
    id: 1,
    name: 'Basic',
    price: '$5/month'
  }, {
    id: 2,
    name: 'Premium',
    price: '$10/month'
  }, {
    id: 3,
    name: 'Ultimate',
    price: '$20/month'
  }];

  const handleSelect = tier => {
    alert(`You selected ${tier.name} tier`);
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose your subscription</Text>
      {tiers.map(tier => <TouchableOpacity key={tier.id} style={styles.tier} onPress={() => handleSelect(tier)}>
          <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
          <View style={styles.tierInfo}>
            <Text style={styles.tierName}>{tier.name}</Text>
            <Text style={styles.tierPrice}>{tier.price}</Text>
          </View>
        </TouchableOpacity>)}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  tier: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  tierInfo: {
    flex: 1
  },
  tierName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  tierPrice: {
    fontSize: 16,
    color: '#888'
  }
});
export default SubscriptionScreen;