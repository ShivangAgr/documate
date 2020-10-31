import React from 'react';
import Menu from '../components/Menu';

const ModMenu = () => {
  console.log('ModMenu');
  const menuList = [
    { icon: "favorite", title: "Edit PDF", desc: "Lorem Ipsum Dolor Sit Amet", to: "SelectPDF", },
    { icon: "favorite", title: "Merge PDF", desc: "Lorem Ipsum Dolor Sit Amet", to: "SelectPDF", },
    { icon: "favorite", title: "Split PDF", desc: "Lorem Ipsum Dolor Sit Amet", to: "SelectPDF", },
  ]

  return (
    <Menu menuList={menuList} />
  )
};

export default ModMenu;