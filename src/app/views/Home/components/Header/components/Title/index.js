// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components

// Libreries

// Styles
import styles from './scss/Title.scss';

const Title = ({ }) => {
  return (
    <div className={`${styles.title}`}>
      <h1 className={`${styles.text}`}>
        ESTÁR CÓMODO, <br /> NUNCA FUE TAN FÁCIL.
      </h1>
    </div>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Title);
