import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import Tree from '../assets/svg/tree.svg';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  
  return (
    <View style={{
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: 164,
      width: 164,
      marginTop: 32,
      marginBottom: 52,
    }} >
      <TouchableWithoutFeedback delayLongPress={500}
        onLongPress={() => navigation.navigate('HomeMenu')}>
        <Tree />
      </TouchableWithoutFeedback>
    </View>
  )
};

export default Header;