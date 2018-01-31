// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import Nav from './components/Nav';
import Title from './components/Title';
import Slider from './components/Slider';
import Shop from './components/Buttons/Shop';

// Libreries

// Styles
import styles from './scss/Header.scss';

const Header = ({ pictures ,nextPicture }) => {
  return (
    <div className={`${styles.header}`} onClick={() => nextPicture(pictures)}>
      <Slider />
      <Nav />
      <Title />
      <Shop />
    </div>
  );
};

const mapStateToProps = state => ({
  pictures: state.home.header.carousel.pictures
});

const mapDispatchToProps = dispatch => ({
  nextPicture(pictures) {
    dispatch({
      type: 'NEXT_PICTURE',
      pictures
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
