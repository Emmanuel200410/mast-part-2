import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const CreateMenuScreen: React.FC = () => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const handleAddMenuItem = () => {
    // Here you would typically send the data to your backend or state management
    // For this example, we'll just show an alert
    Alert.alert("Success", `Successfully added ${dishName} to the menu!`, [{ text: "OK" }]);

    // Reset form fields
    setDishName('');
    setDescription('');
    setCourse('');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Menu Item</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Course (e.g., Appetizer, Main, Dessert)"
        value={course}
        onChangeText={setCourse}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric" // Ensure only numbers can be entered
      />

      <Button title="Add Menu Item" onPress={handleAddMenuItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
  },
});

export default CreateMenuScreen;
