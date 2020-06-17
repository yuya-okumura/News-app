import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './component/Listitem';
import dummy from './dummy/Dummy.json';

export default function App() {
  const items = dummy.map((article, index) => {
    return (
      <ListItem>
        imgUrl={article.urlToImage}
        mainTitle={article.title}
        subTitle={article.author}
        key={index}
      </ListItem>
    );
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={dummy}
        renderItem={({ item }) => (
          <ListItem imgUrl={item.urlToImage} mainTitle={item.title} subTitle={item.author} key={index} />
        )}
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
