import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App'; // Import RootStackParamList

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleCreateMenuPress = () => {
    navigation.navigate('CreateMenuScreen'); // Navigate to Create Menu screen
  };

  const handleMenuPress = () => {
    navigation.navigate('MenuScreen'); // Navigate to Menu screen
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?cs=srgb&dl=close-up-cooking-dinner-46239.jpg&fm=jpg' }} 
        style={styles.image}
      />
      <Text style={styles.welcomeMessage}>Welcome to the Christofel App!</Text>
      
      <Button 
        title="Create Menu"
        onPress={handleCreateMenuPress}
      />
      <Button 
        title="Go to Menu"
        onPress={handleMenuPress} // Navigate to Menu when pressed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  welcomeMessage: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    margin: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});

export default HomeScreen;
