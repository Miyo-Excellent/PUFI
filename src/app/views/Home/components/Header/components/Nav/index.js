// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import Logo from './components/Logo';
import Menu from './components/Menu';
import MiniHub from './components/MiniHub';

// Libreries

// Styles
import styles from './scss/Nav.scss';

const Nav = ({ active, activeNavMobileMenu, isMobile }) => {
  if (isMobile) {
    if (active) {
      return (
        <nav className={`${styles.btn_menu}`} onClick={activeNavMobileMenu}>
          <div className={`${styles.icon}`}>
            <i className="fas fa-bars" />
          </div>
        </nav>
      );
    }
    return (
      <nav className={`${styles.navbar_mobile} ${styles.active}`}>
        <Logo />
        <Menu />
        <MiniHub />
        <div className={`${styles.exit}`} onClick={activeNavMobileMenu}>
          <i className="fas fa-times-circle" />
        </div>
      </nav>
    );
  }
  return (
    <nav className={`${styles.navbar}`}>
      <Logo />
      <Menu />
      <MiniHub />
    </nav>
  );
};

const mapStateToProps = state => ({
  isMobile: state.devices.isMobile,
  active: state.home.nav.mobile.active
});

const mapDispatchToProps = dispatch => ({
  activeNavMobileMenu() {
    dispatch({
      type: 'ACTIVE_NAV_MOBILE_MENU'
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
