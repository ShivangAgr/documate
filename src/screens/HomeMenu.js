import React from 'react';
import Menu from '../components/Menu';

const HomeMenu = () => {
  console.log('HomeMenu');
  const menuList = [
    { icon: "file-pdf", title: "Create PDF", desc: "Lorem Ipsum Dolor Sit Amet", to: "CreateMenu", },
    { icon: "file-document-edit", title: "Modify Existing PDF", desc: "Lorem Ipsum Dolor Sit Amet", to: "ModMenu", },
    { icon: "file-image", title: "Extract Images from PDF", desc: "Lorem Ipsum Dolor Sit Amet", to: "SelectPDF", },
  ]

  return (
    <Menu menuList={menuList} />
  )
};

export default HomeMenu;