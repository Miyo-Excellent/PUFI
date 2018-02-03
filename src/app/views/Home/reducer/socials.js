const socialsInitialState = (options = {}) => [
  {
    name: 'instagram',
    user: 'espufi',
    gallery: [
      {
        url: 'http://localhost:3000/socials/instagram/1.jpg',
        alt: 'Pufi Rain'
      },
      {
        url: 'http://localhost:3000/socials/instagram/2.jpg',
        alt: 'Pufi Cart'
      },
      {
        url: 'http://localhost:3000/socials/instagram/3.jpg',
        alt: 'Pufi Puff'
      },
      {
        url: 'http://localhost:3000/socials/instagram/4.jpg',
        alt: 'Pufi Puff'
      },
      {
        url: 'http://localhost:3000/socials/instagram/5.jpg',
        alt: 'Pufi Nap'
      },
      {
        url: 'http://localhost:3000/socials/instagram/6.jpg',
        alt: 'Pufi Puff'
      }
    ]
  }
  /*
  {
    name: 'facebook',
    user: 'espufi',
    gallery: [
      {
        url: '',
        alt: ''
      },
      {
        url: '',
        alt: ''
      },
      {
        url: '',
        alt: ''
      },
      {
        url: '',
        alt: ''
      },
      {
        url: '',
        alt: ''
      },
      {
        url: '',
        alt: ''
      }
    ]
  }
  */
];

function socials (state = socialsInitialState({}), action) {
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

export default socials;
