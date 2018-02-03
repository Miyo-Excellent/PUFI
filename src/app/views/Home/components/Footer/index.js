// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components

// Libreries

// Assets

// Styles
import styles from './scss/Footer.scss';

const Footer = ({ ensurances, logo, isMobile }) => {
  return (
    <footer className={isMobile ? `${styles.footer_mobile}` : `${styles.footer}`}>
      <div className={`${styles.logo}`}>
        <img src='http://localhost:3000/logo/puffi_black.jpg' alt="PUFI LOGO"/>
      </div>
      <ul className={`${styles.product_list}`}>
        <li className={`${styles.product_link}`}>
          <Link to='/product/puffin-rain'>puffi rain</Link>
        </li>
        <li className={`${styles.product_link}`}>
          <Link to='/product/puffin-puff'>puffi puff</Link>
        </li>
        <li className={`${styles.product_link}`}>
          <Link to='/product/puffin-cart'>puffi cart</Link>
        </li>
        <li className={`${styles.product_link}`}>
          <Link to='/product/puffin-nap'>puffi nap</Link>
        </li>
      </ul>
      <ul className={`${styles.contacts}`}>
        <li className={`${styles.contact}`}>
          <Link to='/contact'>contacto</Link>
        </li>
        <li className={`${styles.help}`}>
          <Link to='/help'>ayuda</Link>
        </li>
        <li className={`${styles.how_to_shop}`}>
          <Link to='/help/how-to-shop'>como comprar</Link>
        </li>
        <li className={`${styles.terms}`}>
          <Link to='/help/terms'>términos & condiciones</Link>
        </li>
      </ul>
      <div className={`${styles.ensurance}`}>
        <div className={`${styles.title}`}>
          <h5>COMPRA 100% SEGURA</h5>
        </div>
        <div className={`${styles.images}`}>{ensurances.map((ensurance, i) =>
          <div className={`${styles.picture}`} key={i}>
            <img src={ensurance} alt="Logo"/>
          </div>
        )}</div>
      </div>
      <div className={`${styles.socials}`}>
        <h5 className={`${styles.title}`}>SEGUINOS EN</h5>
        <ul className={`${styles.list}`}>
          <li className={`${styles.social}`}>
            <Link to='https://www.facebook.com/MiyoExcellent'>
              <img src="http://localhost:3000/logo/facebook.png" alt="Facebook"/>
            </Link>
          </li>
          <li className={`${styles.social}`}>
            <Link to='https://twitter.com/miyo_excellent'>
              <img src="http://localhost:3000/logo/twitter.png" alt="Twitter"/>
            </Link>
          </li>
          <li className={`${styles.social}`}>
            <Link to='https://www.instagram.com/miyo_excellent/'>
              <img src="http://localhost:3000/logo/instagram.png" alt="Instagram"/>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.sub_footer}`}>
        <div className={`${styles.terms}`}>
          <Link to='/help/terms'>PUFI Copyright 2017 - Todos los derechos reservados</Link>
        </div>
        <div className={`${styles.brandLogo}`}>
          <Link to='/brand'>
            <img src={logo.black} alt="BRAND LOGO"/>
          </Link>
        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = state => ({
  ensurances: state.home.footer.ensurances.logo,
  logo: state.home.footer.logo,
  isMobile: state.devices.isMobile
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
