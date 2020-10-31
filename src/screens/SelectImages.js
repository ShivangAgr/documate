import React from 'react';
import SingleButton from '../components/SingleButton';

import ImagePicker from 'react-native-image-crop-picker';

const onPress1 = (navigation) => {
  const options = {
    multiple: true,
    mediaType: 'photo',
  };

  ImagePicker.openPicker(options)
    .then(images => {
      console.log(images);
    });

  console.log('onPress');
  navigation.navigate('ImagesPreview'); // after selecting
};
const onPress = async (navigation) => {
  const options = {
    multiple: true,
    mediaType: 'photo',
  };

  const images = await ImagePicker.openPicker(options);
  // console.log(images);

  navigation.navigate('ImagesPreview', {
    images: images,
  }); // after selecting
};

const SelectImages = ({ navigation }) => {
  return (
    <SingleButton
      icon="image-multiple"
      title="Select Images"
      onPress={() => onPress(navigation).then(()=>{})}
    />
  )
};

export default SelectImages;