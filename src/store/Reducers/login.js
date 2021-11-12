const intialState = {
  isLoggedIn: false,
  activeUser: null,
};
const UserReducer = (state = intialState, action) => {
  switch (action.type) {
    // case Actions.LOGIN: {
    //   //   const { userData, token } = action.payload;
    //   return {
    //     ...state,
    //     isLoggedIn: true,
    //     activeUser: action.payload,
    //     authenticating: false,
    //   };
    // }
    default: {
      return state;
    }
  }
};
export default UserReducer;
