//-------------------------------------------------
// State - User: add  +  count:0
// action -add User
// reducer
// store
//-------------------------------------------------
const { createStore } = require("redux");

// CONSTANT
const ADD_USER = "ADD_USER";

// STATE
const initialState = {
  user: ["Rakibul"],
  count: 1,
};

// ACTION
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// REDUCER
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        user: [...state.user, action.payload],
        count: state.count + 1,
      };

    default:
      state;
  }
};

// STORE
const store = createStore(userReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser("Islam"));
store.dispatch(addUser("Sony"));
