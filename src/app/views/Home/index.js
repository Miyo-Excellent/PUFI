// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components

// Styles
import styles from './scss/Home.scss';

const Home = ({ }) => {
  return (
    <div className={styles.home}>
      <h1>Home</h1>
    </div>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
