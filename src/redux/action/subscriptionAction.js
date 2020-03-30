import {
  ADD_USER_SUBSCRIPTION,
  GET_ALL_USER_SUBSCRIPTIONS
} from "../actionTypes/actionTypes";
import Axios from "../../lib/Axios/Axios";

export const addUserSubscription = subInfo => async dispatch => {
  try {
    let success = await Axios.post("/subscriptions/create-subscription", subInfo);
    dispatch({
      type: ADD_USER_SUBSCRIPTION,
      payload: success.data
    });
    console.log(success);
    Promise.resolve(success);
  } catch (error) {
    console.log((`here it is:`, error));
    return Promise.reject(error);
  }
};

export const getAllUserSubscriptions = id => async dispatch => {
  try {
    let foundAllUserSubs = await Axios.get(
      `/subscriptions/get-all-user-subscriptions/${id}`
    );
    dispatch({
      type: GET_ALL_USER_SUBSCRIPTIONS,
      payload: foundAllUserSubs.data
    });
    Promise.resolve(foundAllUserSubs.data);
  } catch (error) {
    console.log(error);
  }
};
