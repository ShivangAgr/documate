import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import Header from './Header';
import MenuButton from './MenuButton';
import { Primary, Secondary } from '../utils/Colors';

const Menu = (props) => {
  let { menuList } = props;
  console.log('Menu:');

  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <Header />
        {menuList.map((data, index) => (
          <MenuButton {...data} key={index}
            color={index % 2 === 0 ? Primary : Secondary} />
        ))}
      </SafeAreaView >
    </ScrollView>
  )
};

export default Menu;