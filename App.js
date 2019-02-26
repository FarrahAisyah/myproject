import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Siti Nur Farrah Aisyah Binti Zainal Abidin 1612272 </Text>
      <Text> Hello,im SecondStudent Puteri Nur Liyana Binti Nasaruddin 1610012 </Text>
      <Text> My name is Nurain binti Yusop (1615412) </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
