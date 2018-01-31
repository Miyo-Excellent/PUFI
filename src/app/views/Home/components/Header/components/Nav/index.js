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

const Nav = ({ }) => {
  return (
    <nav className={`${styles.navbar}`}>
      <Logo />
      <Menu />
      <MiniHub />
    </nav>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
