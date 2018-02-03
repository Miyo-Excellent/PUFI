// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components

// Libreries

// Styles
import styles from './scss/Logo.scss';

const Logo = ({
  logo = {},
  isMobile
}) => {
  return (
    <div className={isMobile ? `${styles.logo_mobile}` : `${styles.logo}`}>
      <img src={logo.picture.url} alt={logo.picture.alt} />
    </div>
  );
};

const mapStateToProps = state => ({
  logo: state.home.nav.menu.logo,
  isMobile: state.devices.isMobile
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
