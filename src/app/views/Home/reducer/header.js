const headerInitialState = (options = {}) => {
  return {
    carousel: {
      pictures: {
        all: [
          'http://localhost:3000/products/slider.jpg',
          'http://localhost:3000/products/slider_2.jpg',
          'http://localhost:3000/products/slider_3.jpg',
          'http://localhost:3000/products/slider_4.jpg'
        ],
        current: 'http://localhost:3000/products/slider.jpg'
      }
    }
  };
};

function header (state = headerInitialState({}), action) {
  switch (action.type) {
    case "NEXT_PICTURE": {
      const {
        all,
        current
      } = action.pictures;

      const controller = () => {
        if (
          all.indexOf(current) + 1 < all.length
          && all.indexOf(current) !== all.indexOf(current + 1)
          && all.indexOf(current) !== all.indexOf(current - 1)
        ) {
          return all[all.indexOf(current) + 1];
        } else {
          return all[0];
        }
      };

      return {
        ...state,
        carousel: {
          ...state.carousel,
          pictures: {
            all: state.carousel.pictures.all,
            current: controller()
          }
        }
      };
      break;
    }
    case "SET_PICTURE": {
      return {
        ...state,
        carousel: {
          ...state.carousel,
          pictures: {
            all: state.carousel.pictures.all,
            current: state.carousel.pictures.all[action.index]
          }
        }
      };
      break;
    }
    default: {
      return state;
      break;
    }
  }
}

export default header;
