import { ADD_INCREMENT, STR_DECCREMENT } from "../constants";

export const addtostore = (data) => (dispatch) => {
  //console.log("data", data);
  dispatch({
    type: ADD_INCREMENT,
    data: data,
  });
};

export const removetostore = (data) => (dispatch) => {
  //console.log("data", data);
  dispatch({
    type: STR_DECCREMENT,
    data: data,
  });
};
