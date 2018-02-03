// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components

// Libreries

// Styles
import styles from './scss/Socials.scss';

const pictureBG = (picture) => ({
  background: `url(${picture.url}) no-repeat center center`
});

const Socials = ({ isMobile, socials }) => {
  return (
    <section className={isMobile ? `${styles.socials_mobile}` : `${styles.socials}`}>{socials.map((data, index) =>
      <article className={`${styles.social} ${styles[data.name]}`} key={index}>
        <div className={`${styles[`${data.name}_title`]}`}>
          <h5>{data.name}</h5>
        </div>
        <div className={`${styles[`${data.name}_user`]}`}>
          <h5>{`#${data.user.toUpperCase()}`}</h5>
        </div>
        <div className={`${styles.gallery}`}>{data.gallery.map((picture, i) =>
          <div className={`${styles.picture}`} key={i} style={pictureBG(picture)}/>
        )}</div>
      </article>
    )}</section>
  );
};

const mapStateToProps = state => ({
  socials: state.home.socials,
  isMobile: state.devices.isMobile
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Socials);
