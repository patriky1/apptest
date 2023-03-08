import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Adicione aqui a lógica para fazer a autenticação do usuário
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button
        title="Entrar"
        onPress={handleLogin}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top:"200%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    
  },
  input: {
    fontSize:16,
    width: '250%',
    height: 50,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#EEEEEE',
    borderRadius: 30,
    borderColor: '#EEEEEE',
    borderWidth: 1,
  },
  button: {
    width: '80%',
    marginVertical: 10,
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
  },
});

export default Login;
