import axios from "axios";
// import Login from "../../Components/Login";
import * as Actions from "./UiActions";
export const LOGIN = "LOGIN";
export const getAuthToken = () => {
  return "Bearer " + localStorage.getItem("authToken");
};
export const login = ({ username, password }) => {
  return async (dispatch, getState) => {
    // action for login user
    try {
      const res = await axios.post("http://localhost:3000/users/login", {
        username,
        password,
      });
      if (res.status === 200 && res.statusText === "OK") {
        const { token } = res.data;
        const emp = {
          ...res.data.emp,
        };
        localStorage.setItem("authToken", token);
        dispatch({
          type: LOGIN,
          payload: emp,
        });
      }
      return res.status;
    } catch (error) {
      // console.log("Error", error);
      dispatch({
        type: Actions.FAILED,
        payload: "something happened wrong ...!",
      });
    }
  };
};
