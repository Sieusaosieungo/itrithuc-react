import React, { Component } from 'react';
import HeaderStyle from './index.style';
import Logo from './Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    const isTop = window.scrollY < 50;
    if (isTop !== true) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { scrolled } = this.state;
    const { drawerToggleClicked } = this.props;
    return (
      <HeaderStyle scrolled={scrolled}>
        <div>
          <Logo scrolled={scrolled} className="Logo" />
        </div>
        <nav className="DesktopOnly">
          <NavigationItems scrolled={scrolled} />
        </nav>
        <DrawerToggle scrolled={scrolled} clicked={drawerToggleClicked} />
      </HeaderStyle>
    );
  }
}

export default Header;
