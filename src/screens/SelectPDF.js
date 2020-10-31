import React from 'react';

import SingleButton from '../components/SingleButton';

const onPress = () => {
  alert('Click detected.');
  console.log('OnPress');
};

const SelectPDF = () => {
  return (
    <SingleButton
      icon="favorite"
      title="Select PDF"
      onPress={onPress}
    />
  )
};

export default SelectPDF;