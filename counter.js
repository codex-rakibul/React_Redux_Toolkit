//-------------------------------------------------
// State - count:0
// action -increment, decrement, reset
// reducer
// store
//-------------------------------------------------
const { createStore } = require("redux");

// CONSTANT
const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// STATE
const initialState = {
  count: 0,
};

// ACTION
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetAction = () => {
  return {
    type: RESET,
  };
};

const incrementByValueAction = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

// REDUCER
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      state;
  }
};

// STORE
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(decrementAction());
// store.dispatch(resetAction());
store.dispatch(incrementByValueAction(5));
