// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import MyAccount from './components/MyAccount';
import MyShop from './components/MyShop';

// Libreries

// Styles
import styles from './scss/MiniHub.scss';

const MiniHub = ({ }) => {
  return (
    <div className={`${styles.miniHub}`}>
      <MyAccount />
      <MyShop />
    </div>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MiniHub);
