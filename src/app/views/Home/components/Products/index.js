// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components

// Libreries

// Styles
import styles from './scss/Products.scss';

const products = [
  {
    name: 'Pufi Rain',
    description: 'Descripción del producti. Este es un Texto simulado',
    side: [
      {
        side: 'left',
        picture: {
          url: 'http://odishasuntimes.com/wp-content/uploads/2017/11/featured-rain.jpg',
          alt: 'Pufi Rain'
        },
        buttons: [
          {
            name: 'Más Info',
            type: 'link',
            path: '/buy/pufi-rain'
          }
        ]
      },
      {
        side: 'right',
        picture: {
          background: '#dfdfdf',
          image: 'https://orig00.deviantart.net/157d/f/2009/317/0/2/free_png_umbrella_by_absurdwordpreferred.png'
        },
        buttons: [
          {
            name: 'Más Info',
            type: 'link',
            path: '/products/pufi-rain'
          }
        ]
      }
    ]
  },
  {
    name: 'Pufi Puff',
    description: 'Descripción del producti. Este es un Texto simulado',
    side: [
      {
        side: 'right',
        picture: {
          url: 'https://abrilcasaclaudia.files.wordpress.com/2016/12/07-inspire-se-em-16-modelos-de-pufes-e-tres-jeitos-de-usar.jpeg?quality=95&strip=info&w=532',
          alt: 'Pufi Puff'
        },
        buttons: [
          {
            name: 'Más Info',
            type: 'link',
            path: '/buy/pufi-puff'
          }
        ]
      },
      {
        side: 'left',
        picture: {
          background: '#dfdfdf',
          image: 'http://atrezza.es//imagenesproductos/59fb1f8013a76_puff.png'
        },
        buttons: [
          {
            name: 'Más Info',
            type: 'link',
            path: '/products/pufi-puff'
          }
        ]
      }
    ]
  },
  {
    name: 'Pufi Cart',
    description: 'Descripción del producti. Este es un Texto simulado',
    side: [
      {
        side: 'left',
        picture: {
          url: 'https://img.etsystatic.com/il/16c2a0/1296462796/il_570xN.1296462796_8q9n.jpg',
          alt: 'Pufi Cart'
        },
        buttons: [
          {
            name: 'Más Info',
            type: 'link',
            path: '/buy/pufi-cart'
          }
        ]
      },
      {
        side: 'right',
        picture: {
          background: '#dfdfdf',
          image: 'https://www.omegawatches.com/media/catalog/product/cache/image_1/800x1100/e9c3970ab036de70892d86c6d221abfe/i/m/image-7020710001.png'
        },
        buttons: [
          {
            name: 'Más Info',
            type: 'link',
            path: '/products/pufi-cart'
          }
        ]
      }
    ]
  },
  {
    name: 'Pufi Nap',
    description: 'Descripción del producti. Este es un Texto simulado',
    side: [
      {
        side: 'right',
        picture: {
          url: 'http://cdn.shopify.com/s/files/1/1681/8189/products/product-image-319676520_grande.jpg?v=1501252323',
          alt: 'Pufi Nap'
        },
        buttons: [
          {
            name: 'Más Info',
            type: 'link',
            path: '/buy/pufi-nap'
          }
        ]
      },
      {
        side: 'left',
        picture: {
          background: '#dfdfdf',
          image: 'https://http2.mlstatic.com/almohada-de-aire-deruicent-almohada-de-viaje-de-avion-al-D_NQ_NP_607470-MLC25703407231_062017-F.jpg'
        },
        buttons: [
          {
            name: 'Más Info',
            type: 'link',
            path: '/products/pufi-nap'
          }
        ]
      }
    ]
  }
];

const Products = ({ }) => {

  //const background = product.side[0].picture.background ? product.side[0].picture.background : product.side[1].picture.background;
  const picture = (product) => {
    const url = product.side[0].picture.url ? product.side[0].picture.url : product.side[1].picture.url;
    const buttons = product.side[0].buttons ? product.side[0].buttons : product.side[1].buttons;

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

  return (
    <section className={`${styles.products}`}>{products.map((product, index, arr) => product.side[0].side === 'left'
      ? (
        <article className={`${styles.product}`} key={product.name}>
          <div className={`${styles.slide_left}`}>
            {picture(product)}
          </div>
          <div className={`${styles.slide_right}`}>
            {description(product)}
          </div>
        </article>
      ) : (
        <article className={`${styles.product}`} key={product.name}>
          <div className={`${styles.slide_right}`}>
            {description(product)}
          </div>
          <div className={`${styles.slide_left}`}>
            {picture(product)}
          </div>
        </article>
      ))}</section>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
