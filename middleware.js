// productReducer---------------------------------

const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// product CONSTANTS
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

// product STATE
const initialProductState = {
  products: ["suger", "salt"],
  numberofProducts: 2,
};

// product ACTIONS
const getProducts = () => {
  return {
    type: GET_PRODUCT,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// product Reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };

    default:
      return state;
  }
};

// STORE
const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("ata"));