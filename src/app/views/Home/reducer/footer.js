const footerInitialState = (options = {}) => ({
  logo: {
    black: "http://localhost:3000/logo/puffi_black.jpg",
    white: "http://localhost:3000/logo/puffi_black.jpg"
  },
  ensurances: {
    logo: [
      "http://localhost:3000/logo/puffi_black.jpg",
      "http://localhost:3000/logo/puffi_black.jpg"
    ]
  }
});

function footer (state = footerInitialState({}), action) {
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

export default footer;
