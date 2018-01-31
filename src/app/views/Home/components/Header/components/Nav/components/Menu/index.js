// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Components

// Libreries

// Styles
import styles from './scss/Menu.scss';

const Menu = ({
  links = [
    {
      name: "PUFI PUFF",
      picture: {
        url: "#",
        alt: "PUFI PUFF"
      },
      path: "/products/pufi-puff"
    },
    {
      name: "PUFI RAIN",
      picture: {
        url: "#",
        alt: "PUFI RAIN"
      },
      path: "/products/pufi-rain"
    },
    {
      name: "PUFI CART",
      picture: {
        url: "#",
        alt: "PUFI CART"
      },
      path: "/products/pufi-cart"
    },
    {
      name: "PUFI NAP",
      picture: {
        url: "#",
        alt: "PUFI NAP"
      },
      path: "/products/pufi-nap"
    }
  ]
}) => {
  return (
    <ul className={`${styles.menuList}`}>{ links.map((link, index, arr) =>
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
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
