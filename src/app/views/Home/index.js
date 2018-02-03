// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import Socials from './components/Socials';

// Libreries

// Styles
import styles from './scss/Home.scss';

const Home = ({ }) => {
  return (
    <div className={`${styles.home}`}>
      <Header />
      <Products />
      <Socials />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
