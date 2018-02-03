// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components

// Libreries

// Styles
import styles from './scss/Shop.scss';

const Shop = ({ }) => {
  return (
    <div className={`${styles.shop}`} onClick={() => console.log('hola')}>
      <Link to="/store">SHOP</Link>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
