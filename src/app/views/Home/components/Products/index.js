// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components

// Libreries

// Styles
import styles from './scss/Products.scss';

const Products = ({ isMobile, products }) => {

  const picture = (product) => {
    const url = product.side[0].picture.url ? product.side[0].picture.url : product.side[1].picture.url;
    const buttons = product.side[0].picture.background ? product.side[0].buttons : product.side[1].buttons;

    const background = {
      background: `url('${url}') no-repeat center center`
    };
    return (
      <div className={`${styles.picture}`} style={background}>{buttons.map((button, index, arr) =>
        <div className={`${styles.btn_home_product_shop}`} key={index}>
          <Link to={button.path}>SHOP</Link>
        </div>
      )}</div>
    );
  };

  const description = (product) => {
    const background = product.side[0].picture.background ? product.side[0].picture.background : product.side[1].picture.background;
    const img = product.side[0].picture.image ? product.side[0].picture.image : product.side[1].picture.image;
    const buttons = product.side[0].buttons ? product.side[0].buttons : product.side[1].buttons;

    const backgroundColor = {
      background: `${background}`
    };

    return (
      <div className={`${styles.description}`} style={backgroundColor}>
        <div className={`${styles.photo}`}>
          <img src={img} alt={product.name} />
        </div>
        <div className={`${styles.name}`}>
          <h4>{product.name.toUpperCase()}</h4>
        </div>
        <div className={`${styles.hr}`} />
        <div className={`${styles.text}`}>
          <p>{product.description}</p>
        </div>
        <div className={`${styles.buttons}`}>{buttons.map((button, index, arr) =>
          <div className={`${styles.btn_home_product}`} key={index}>
            <Link to={button.path}>{button.name}</Link>
          </div>
        )}</div>
      </div>
    );
  };

  const PRODUCT = (styles, product, side, options) => {

    if (side === 'right') {
      return (
        <article className={`${styles.product} ${styles.sub_triangle_right}`} key={product.name}>
          {options.sides[0](product)}
          {options.sides[1](product)}
        </article>
      );

    } else if (side === 'left') {
      return (
        <article className={`${styles.product} ${styles.sub_triangle_left}`} key={product.name}>
          {options.sides[0](product)}
          {options.sides[1](product)}
        </article>
      );

    } else if (side === 'top') {
      return (
        <article className={`${styles.product} ${styles.sub_triangle_top}`} key={product.name}>
          {options.sides[0](product)}
          {options.sides[1](product)}
        </article>
      );

    } else if (side === 'bottom') {
      return (
        <article className={`${styles.product} ${styles.sub_triangle_bottom}`} key={product.name}>
          {options.sides[0](product)}
          {options.sides[1](product)}
        </article>
      );

    } else {
      return (
        <article className={`${styles.product}`} key={product.name}>
          {options.sides[0](product)}
          {options.sides[1](product)}
        </article>
      );
    }
  };

  return (
    <section className={`${styles.products}`}>{products.map((product, index, arr) => isMobile
      // Mobile
      ? product.side[0].side === 'left'
        // LEFT SIDE
        ? PRODUCT(styles, product, 'top', {sides: [
          (product) => (
            <div className={`${styles.slide_left}`}>
              {picture(product)}
            </div>
          ),
          (product) => (
            <div className={`${styles.slide_right}`}>
              {description(product)}
            </div>
          )
        ]})

        // RIGHT SIDE
        : PRODUCT(styles, product, 'bottom', {sides: [
          (product) => (
            <div className={`${styles.slide_right}`}>
              {description(product)}
            </div>
          ),
          (product) => (
            <div className={`${styles.slide_left}`}>
              {picture(product)}
            </div>
          )
        ]})

        // Desktop
      : product.side[0].side === 'left'
        // LEFT SIDE
        ? PRODUCT(styles, product, 'left', {sides: [
          (product) => (
            <div className={`${styles.slide_left}`}>
              {picture(product)}
            </div>
          ),
          (product) => (
            <div className={`${styles.slide_right}`}>
              {description(product)}
            </div>
          )
        ]})

        // RIGHT SIDE
        : PRODUCT(styles, product, 'right', {sides: [
          (product) => (
            <div className={`${styles.slide_right}`}>
              {description(product)}
            </div>
          ),
          (product) => (
            <div className={`${styles.slide_left}`}>
              {picture(product)}
            </div>
          )
        ]})
    )}</section>
  );
};

const mapStateToProps = state => ({
  isMobile: state.devices.isMobile,
  products: state.home.products
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
