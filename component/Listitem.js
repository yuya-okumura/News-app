import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  newsContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  subText: {
    fontSize: 11,
    color: 'blue',
    padding: 5,
  },
});

const listItem = ({ imgUrl, mainTitle, subTitle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.newsContainer}>
        <View style={styles.leftContainer}>
          <Image style={{ width: 100, height: 100 }} source={{ uri: imgUrl }} />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3}>{mainTitle}</Text>
          <Text style={styles.subText}>{subTitle}</Text>
        </View>
      </View>
    </View>
  );
};
export default listItem;
