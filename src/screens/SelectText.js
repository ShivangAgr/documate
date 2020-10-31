import React from 'react';

import SingleButton from '../components/SingleButton';

const onPress = (navigation) => {
  // TODO: https://github.com/itinance/react-native-fs
  console.log('onPress');
  // navigation.navigate('NEXTSCREEN'); after selecting
};

const SelectText = ({ navigation }) => {
  return (
    <SingleButton
      icon="text-subject"
      title="Select Text"
      onPress={() => onPress(navigation)}
    />
  )
};

export default SelectText;