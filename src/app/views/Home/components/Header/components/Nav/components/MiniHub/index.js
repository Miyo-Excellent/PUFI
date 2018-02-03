// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import MyAccount from './components/MyAccount';
import MyShop from './components/MyShop';

// Libreries

// Styles
import styles from './scss/MiniHub.scss';

const MiniHub = ({ isMobile }) => {
  return (
    <div className={isMobile ? `${styles.miniHub_mobile}` : `${styles.miniHub}`}>
      <MyAccount />
      <MyShop />
    </div>
  );
};

const mapStateToProps = state => ({
  isMobile: state.devices.isMobile
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MiniHub);
