const productsInitialState = (options = {}) => {
  return [
    {
      name: 'Pufi Rain',
      description: 'Descripción del producti. Este es un Texto simulado',
      side: [
        {
          side: 'left',
          picture: {
            url: 'http://localhost:3000/products/pufi_rain.jpg',
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
            image: 'http://localhost:3000/products/pufi_rain_2.jpg'
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
            url: 'http://localhost:3000/products/pufi_puff_6.jpg',
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
            image: 'http://localhost:3000/products/pufi_puff_2.jpg'
          },
          buttons: [
            /*{
              name: 'Más Info',
              type: 'link',
              path: '/products/pufi-puff'
            }*/
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
            url: 'http://localhost:3000/products/pufi_cart_3.jpg',
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
            image: 'http://localhost:3000/products/pufi_cart_2.jpg'
          },
          buttons: [
            /*{
              name: 'Más Info',
              type: 'link',
              path: '/products/pufi-cart'
            }*/
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
            url: 'http://localhost:3000/products/pufi_nap.jpg',
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
            image: 'http://localhost:3000/products/pufi_nap_2.jpg'
          },
          buttons: [
            /*{
              name: 'Más Info',
              type: 'link',
              path: '/products/pufi-nap'
            }*/
          ]
        }
      ]
    }
  ];
};

function products (state = productsInitialState({}), action) {
  switch (action.type) {
    case "NEW": {
      return {
        ...state
      };
      break;
    }
    default: {
      return state;
      break;
    }
  }
}

export default products;
