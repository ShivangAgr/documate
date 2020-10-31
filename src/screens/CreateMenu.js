import React from 'react';
import Menu from '../components/Menu';

const CreateMenu = () => {
  console.log('CreateMenu');
  const menuList = [
    { icon: "image-multiple", title: "Image to PDF", desc: "Lorem Ipsum Dolor Sit Amet", to: "SelectImages", },
    { icon: "text-subject", title: "Text to PDF", desc: "Lorem Ipsum Dolor Sit Amet", to: "SelectText", },
  ]

  return (
    <Menu menuList={menuList} />
  )
};

export default CreateMenu;