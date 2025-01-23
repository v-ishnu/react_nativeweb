import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions} from 'react-native';

const WebHome = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    Alert.alert('Success');
  };

  return (
    <View style={styles.container}>
        <Text>Helo</Text>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Redirect to reset password screen')}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const {height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: height * 0.05,
  },
  title: {
    // fontSize: Platform.OS === 'web' ? 28 : 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: height * 0.02,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    maxWidth: 400, // Restrict max width for larger screens
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
 
    color: '#333',
    outlineStyle: 'none', // Remove web input focus outline
  },
  button: {
    width: '100%',
    maxWidth: 400,
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    // fontSize: Platform.OS === 'web' ? 16 : 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007bff',
    // fontSize: Platform.OS === 'web' ? 14 : 16,
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});

export default WebHome;