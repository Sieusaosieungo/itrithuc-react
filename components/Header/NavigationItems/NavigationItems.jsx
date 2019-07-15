import React from 'react';
import routes from '../../../containers/App/routes';
import NavigationItem from './NavigationItem/NavigationItem';
import NavigationItemsStyle from './NavigationItems.style';

const arrayItems = [
  { link: routes.index, title: 'VOICE VIỆT' },
  { link: routes.textToSpeech, title: 'TEXT-TO-SPEECH' },
  { link: routes.speechToText, title: 'SPEECH-TO-TEXT' },
  { link: routes.troLyAo, title: 'TRỢ LÝ ẢO' },
  { link: routes.truyenNoi, title: 'TRUYỆN NÓI' },
];
const navigationItems = ({ scrolled, showSideDrawer }) => (
  <NavigationItemsStyle scrolled={scrolled}>
    {arrayItems.map(item => (
      <NavigationItem
        key={item.title}
        showSideDrawer={showSideDrawer}
        scrolled={scrolled}
        link={item.link}
      >
        {item.title}
      </NavigationItem>
    ))}
  </NavigationItemsStyle>
);

export default navigationItems;
