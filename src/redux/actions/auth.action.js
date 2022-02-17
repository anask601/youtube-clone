import firebase from "firebase/app";
import auth from "../../firebase.js";
import * as actionTypes from "../actionType.js";

// using thunk to get the dispatch in this action for async operations
export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.LOGIN_REQUEST,
    });

    const provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

    const response = await auth.signInWithPopup(provider);

    console.log(response);

    const accessToken = response.credential.accessToken;

    const profile = {
      name: response.additionalUserInfo.profile.name,
      photoURL: response.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem("ytc-access-token", accessToken);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: actionTypes.LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  await auth.signOut();

  dispatch({
    type: actionTypes.LOG_OUT,
  });

  sessionStorage.removeItem("ytc-access-token");
  sessionStorage.removeItem("ytc-user");
};
