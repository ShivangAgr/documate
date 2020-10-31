import React from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Neomorph } from 'react-native-neomorph-shadows';

const MenuButton = (props) => {
  const { icon, color, title, desc, to } = props;
  const navigation = useNavigation();
  console.log('MenuButton:', icon, title, to);

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(to)}
    >
      <Neomorph style={styles.neomorph}>
        <Icon name={icon} size={60}
          color={color}
          style={{ paddingRight: 24, width: 84, textAlign: 'center' }} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </Neomorph>
    </TouchableWithoutFeedback >
  )
};

const styles = StyleSheet.create({
  neomorph: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowRadius: 6,
    borderRadius: 24,
    backgroundColor: "#E5E5F0",
    width: 360,
    height: 120,
    padding: 32,
    marginBottom: 24,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  desc: {
    color: "#666",
    fontSize: 14,
  }
})

export default MenuButton;