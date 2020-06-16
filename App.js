import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListItem from './component/Listitem';

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imgUrl="https://picsum.photos/100/100"
        subTitle="yuya news"
        mainTitle=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
