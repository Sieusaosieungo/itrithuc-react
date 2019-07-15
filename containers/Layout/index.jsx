import React, { PureComponent } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SideDrawer from '../../components/Header/SideDrawer/SideDrawer';
import Background from '../../components/Background';

class Layout extends PureComponent {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  render() {
    const { children } = this.props;
    const { showSideDrawer } = this.state;
    return (
      <>
        <Header drawerToggleClicked={this.sideDrawerToggleHandler} />

        <Background>
          <p>
            Paragraph that using to introduce about Product as well as the
            company.
          </p>
        </Background>

        <SideDrawer
          open={showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        {children}
        <Footer />
      </>
    );
  }
}
export default Layout;
