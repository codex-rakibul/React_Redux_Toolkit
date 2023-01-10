// productReducer---------------------------------

const { createStore, combineReducers } = require("redux");

// product CONSTANTS
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

// cart CONSTANTS
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";

// product STATE
const initialProductState = {
  products: ["suger", "salt"],
  numberofProducts: 2,
};

// cart STATE
const initialCarttState = {
  cart: ["suger"],
  numberofProducts: 1,
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

// cart ACTIONS
const getCart = () => {
  return {
    type: GET_CART_ITEMS,
  };
};

const addCart = (product) => {
  return {
    type: ADD_CART_ITEMS,
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

// cart Reducer
const cartReducer = (state = initialCarttState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEMS:
      return {
        cart: [...state.cart, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };

    default:
      return state;
  }
};

//multiple Reducer pass
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

// STORE
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(getProducts());
// store.dispatch(addProduct("ata"));

store.dispatch(getCart());
store.dispatch(addCart("ata"));



