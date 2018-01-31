// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Components

// Libreries

// Styles
import styles from './scss/MyShop.scss';

const MyShop = ({
  active = false
}) => {
  return (
    <div className={`${styles.myShop}`}>{ active
      ? (
        <div className={`${styles.container}`}>
          <div className={`${styles.btn_dogger} ${styles.btn_select}`}>
            <Link to="/my-shop">MI COMPRA</Link>
          </div>
        </div>
      ): (
        <div className={`${styles.container}`}>
          <div className={`${styles.btn_dogger} ${styles.btn_select}`}>
            <Link to="/register">Registrar</Link>
          </div>
        </div>
      )}</div>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MyShop);
