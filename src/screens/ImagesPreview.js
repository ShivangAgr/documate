import React, { useState } from 'react';
import { Text, SafeAreaView, ScrollView, Image, View, StyleSheet, TouchableWithoutFeedback, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Neomorph } from 'react-native-neomorph-shadows';

import { Primary } from '../utils/Colors';
import Header from '../components/Header';

const ImagesPreview = ({ navigation, route }) => {
  // const { images } = route.params;
  const [images, setImages] = useState(route.params.images);
  console.log("ImagesPreview, images:", images);

  const onConvert = () => {
    console.log("onConvert");
  }

  const onReverse = () => {
    console.log("onReverse...");
    setImages([...images].reverse());
  }

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <Header />
      {/* <ScrollView style={styles.imageGrid} >
        {images.map(i => (
          <Image key={i.path} source={{ uri: i.path }}
            style={styles.images} />
        ))} </ScrollView> */}
      <FlatList style={styles.imageGrid}
        data={images}
        renderItem={({ item }) => (
          <Image source={{ uri: item.path }}
            style={styles.images} />
        )}
        keyExtractor={i => i.path}
      />

      <View style={styles.bottomSection} >
        <TouchableWithoutFeedback onPress={onConvert}>
          <Neomorph style={styles.neomorph}>
            <Icon name='image-multiple' size={50}
              color={Primary} style={{ paddingRight: 12 }} />
            <Text style={styles.title}>Convert to PDF</Text>
          </Neomorph>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={onReverse}>
          <Neomorph style={styles.neomorph2}>
            <Icon name='cached' size={50}
              color={Primary} />
          </Neomorph>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  imageGrid: {
    backgroundColor: '#9FBCE8',
    borderRadius: 16,
    borderColor: '#444',
    borderWidth: 2,
    flexGrow: 1,
    // justifyContent: "center",
    margin: 32,
    marginTop: 0,
    padding: 16,
  },
  images: {
    width: 100,
    height: 100,
    marginRight: 16,
    marginBottom: 16,
  },
  bottomSection: {
    // justifyContent: "center",
    justifyContent: "space-between",
    margin: 32,
    marginTop: 0,
    flexDirection: 'row',
  },
  neomorph: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowRadius: 6,
    borderRadius: 80,
    backgroundColor: "#E5E5F0",
    width: 240,
    height: 64,
    padding: 20,
  },
  neomorph2: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowRadius: 6,
    borderRadius: 80,
    backgroundColor: "#E5E5F0",
    width: 64,
    height: 64,
    padding: 8,
  },
  title: {
    color: "#444",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ImagesPreview;