import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Textarea,
} from 'react-native';

import axios from 'axios';

export default function App() {
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState('');

  const carregar = async () => {
    const {data: result} = await axios.get(
      `https://api.github.com/users/${username}`,
    );

    setUser(result);
  };

  return (
    <View style={styles.dados}>
      <Text>Digite o usuário do github abaixo:</Text>
      <TextInput
        style={styles.input}
        placeholder="github username"
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.btn} onPress={carregar}>
        <Text style={styles.textBuscar}>Buscar</Text>
      </TouchableOpacity>

      <Text style={styles.textName}>{user.name || user.login}</Text>

      <Image style={styles.img} source={{uri: user.avatar_url}} />
    </View>
  );
}

const styles = StyleSheet.create({
  dados: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'orange',
    width: 90,
    height: 30,
    borderRadius: 7,
    marginTop: 10,
  },
  textBuscar: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center',
  },
  textName: {
    fontSize: 15,
    marginTop: 12,
    marginBottom: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    alignItems: 'center',
    width: 280,
    height: 280,
    borderRadius: 900,
  },
});
