import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './Styles';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleButtonPress = () => {
    setOutputText((prevText) => `${prevText}\n${inputText}`);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
      <ScrollView style={styles.outputContainer}>
        <Text style={styles.outputText}>{outputText}</Text>
      </ScrollView>
    </View>
  );
};

export default App;
