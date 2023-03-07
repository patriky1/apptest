import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Adicione aqui a lógica para fazer a autenticação do usuário
  };

  return (
    <View>
      <TextInput
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button
        title="Entrar"
        onPress={handleLogin}
      />
    </View>
  );
};

export default Login;
