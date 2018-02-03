// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components

// Libreries

// Styles
import styles from './scss/Menu.scss';

const Menu = ({
  links = [],
  isMobile
}) => {
  return (
    <ul className={isMobile ? `${styles.menuList_mobile}` : `${styles.menuList}`}>{ links.map((link, index, arr) =>
      <li className={`${styles.link}`} key={index}>{
        link.picture.url !== "#"
        && link.picture.url !== ""
          ? (
            <Link to={link.path}>
              <div className={`${styles.icon}`}>
                <img src={link.picture.url} alt={link.picture.alt} />
              </div>
              <div className={`${styles.text}`}>
                <span>{link.name}</span>
              </div>
            </Link>
          ) : (
            <Link to={link.path}>
              <div className={`${styles.text}`}>
                <span>{link.name}</span>
              </div>
            </Link>
          )
      }</li>
    )}</ul>
  );
};

const mapStateToProps = state => ({
  links: state.home.nav.menu.links,
  isMobile: state.devices.isMobile
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
