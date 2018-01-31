// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components

// Libreries

// Styles
import styles from './scss/Logo.scss';

const Logo = ({
  logo = {
    picture: {
      url: 'https://i1.wp.com/www.egoforum.net/wp-content/uploads/2017/12/Pufi-09.png?fit=1192%2C1125',
      alt: "LOGO"
    }
  }
}) => {
  return (
    <div className={`${styles.logo}`}>
      <img src={logo.picture.url} alt={logo.picture.alt} />
    </div>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
