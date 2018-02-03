// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components

// Libreries

// Styles
import styles from './scss/Controller.scss';

const Controller = ({ pictures, nextPicture, setPicture }) => {
  return (
    <div className={`${styles.controller}`}>{pictures.all.map((picture, index, arr) =>
      <span className={pictures.current === picture ? `${styles.picture_active}` : `${styles.picture}`} onClick={() => setPicture(index)} key={index}>
        <div className={`${styles.border}`} />
      </span>
    )}</div>
  );
};

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  nextPicture(pictures) {
    dispatch({
      type: 'NEXT_PICTURE',
      pictures
    });
  },
  setPicture(index) {
    dispatch({
      type: 'SET_PICTURE',
      index
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
