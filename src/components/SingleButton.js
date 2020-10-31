import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Neomorph } from 'react-native-neomorph-shadows';

import Header from './Header';
import { Primary } from '../utils/Colors';

const SingleButton = (props) => {
  // const { route } = props;
  let { icon, title, onPress } = props;
  console.log('SingleButton:', icon, title);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", }}>
      <Header />
      <View style={styles.container} >
        <TouchableWithoutFeedback onPress={onPress}>
          <Neomorph style={styles.neomorph}>
            <Icon name={icon} size={50}
              color={Primary}
              style={{ paddingRight: 16 }} />
            <Text style={styles.title}>
              {title}
            </Text>
          </Neomorph>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    marginBottom: 32,
  },
  neomorph: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowRadius: 6,
    borderRadius: 80,
    backgroundColor: "#E5E5F0",
    width: 320,
    height: 80,
    padding: 24,
    marginBottom: 80,
  },
  title: {
    color: "#444",
    fontSize: 24,
    fontWeight: "bold",
  },
})

export default SingleButton;