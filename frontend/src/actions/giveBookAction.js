import axios from "axios";

import {
  ALL_GIVEBOOK_FAIL,
  ALL_GIVEBOOK_REQUEST,
  ALL_GIVEBOOK_SUCCESS,
  ADMIN_GIVEBOOK_FAIL,
  ADMIN_GIVEBOOK_REQUEST,
  ADMIN_GIVEBOOK_SUCCESS,
  NEW_GIVEBOOK_REQUEST,
  NEW_GIVEBOOK_FAIL,
  NEW_GIVEBOOK_SUCCESS,
  UPDATE_GIVEBOOK_REQUEST,
  UPDATE_GIVEBOOK_SUCCESS,
  UPDATE_GIVEBOOK_FAIL,
  DELETE_GIVEBOOK_REQUEST,
  DELETE_GIVEBOOK_SUCCESS,
  DELETE_GIVEBOOK_FAIL,
  GIVEBOOK_DETAILS_REQUEST,
  GIVEBOOK_DETAILS_FAIL,
  GIVEBOOK_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/giveBookConstants";

export const getGivebook =
  (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_GIVEBOOK_REQUEST });

      let link = `/api/v1/givebook?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (category) {
        link = `/api/v1/givebook?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_GIVEBOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_GIVEBOOK_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All GIVEBOOKs For Admin
export const getAdminGiveBook = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_GIVEBOOK_REQUEST });

    const { data } = await axios.get("/api/v1/givebook");

    dispatch({
      type: ADMIN_GIVEBOOK_SUCCESS,
      payload: data.giveBook,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_GIVEBOOK_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create GIVEBOOK
export const createGiveBook = (giveBookData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_GIVEBOOK_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
    // console.log("here am i");
    const { data } = await axios.post(
      `/api/v1/givebook/new`,
      giveBookData,
      config
    );

    dispatch({
      type: NEW_GIVEBOOK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_GIVEBOOK_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Update GIVEBOOK
// export const updateGIVEBOOK = (id, GIVEBOOKData) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_GIVEBOOK_REQUEST });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const { data } = await axios.put(
//       `/api/v1/admin/GIVEBOOK/${id}`,
//       GIVEBOOKData,
//       config
//     );

//     dispatch({
//       type: UPDATE_GIVEBOOK_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_GIVEBOOK_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };
// // Delete GIVEBOOK
// export const deleteGIVEBOOK = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_GIVEBOOK_REQUEST });

//     const { data } = await axios.delete(`/api/v1/admin/GIVEBOOK/${id}`);

//     dispatch({
//       type: DELETE_GIVEBOOK_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_GIVEBOOK_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };
// //Get GIVEBOOK Details
// export const getGIVEBOOKDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: GIVEBOOK_DETAILS_REQUEST });

//     const { data } = await axios.get(`/api/v1/GIVEBOOK/${id}`);

//     dispatch({
//       type: GIVEBOOK_DETAILS_SUCCESS,
//       payload: data.GIVEBOOK,
//     });
//   } catch (error) {
//     dispatch({
//       type: GIVEBOOK_DETAILS_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

//Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
