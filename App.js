import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
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
      <TextInput
        placeholder="Usuario do github"
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity onPress={carregar}>
        <Text>Carregar</Text>
      </TouchableOpacity>

      <Text>{user.name}</Text>

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
  img: {
    alignItems: 'center',
    width: '90%',
    height: '50%',
  },
});
