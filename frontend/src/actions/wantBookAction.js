import axios from "axios";

import {
  ALL_WANTBOOK_FAIL,
  ALL_WANTBOOK_REQUEST,
  ALL_WANTBOOK_SUCCESS,
  ADMIN_WANTBOOK_FAIL,
  ADMIN_WANTBOOK_REQUEST,
  ADMIN_WANTBOOK_SUCCESS,
  NEW_WANTBOOK_REQUEST,
  NEW_WANTBOOK_FAIL,
  NEW_WANTBOOK_SUCCESS,
  UPDATE_WANTBOOK_REQUEST,
  UPDATE_WANTBOOK_SUCCESS,
  UPDATE_WANTBOOK_FAIL,
  DELETE_WANTBOOK_REQUEST,
  DELETE_WANTBOOK_SUCCESS,
  DELETE_WANTBOOK_FAIL,
  WANTBOOK_DETAILS_REQUEST,
  WANTBOOK_DETAILS_FAIL,
  WANTBOOK_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/wantBookConstants";

// export const getWantbook =
//   (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
//   async (dispatch) => {
//     try {
//       dispatch({ type: ALL_WANTBOOK_REQUEST });

//       let link = `/api/v1/wantbook?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

//       if (category) {
//         link = `/api/v1/wantbook?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
//       }

//       const { data } = await axios.get(link);

//       dispatch({
//         type: ALL_WANTBOOK_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: ALL_WANTBOOK_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   };

// Get All WANTBOOKs For Admin
export const getAdminWantBook = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_WANTBOOK_REQUEST });

    const { data } = await axios.get("/api/v1/wantbook");
    console.log("heyyy", data);
    dispatch({
      type: ADMIN_WANTBOOK_SUCCESS,
      payload: data.wantBook,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_WANTBOOK_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create WANTBOOK
export const createWantBook = (wantBookData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_WANTBOOK_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
    console.log("here am i");
    const { data } = await axios.post(
      `/api/v1/wantbook/new`,
      wantBookData,
      config
    );
    console.log("data", data);
    dispatch({
      type: NEW_WANTBOOK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_WANTBOOK_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Update WANTBOOK
// export const updateWANTBOOK = (id, WANTBOOKData) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_WANTBOOK_REQUEST });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const { data } = await axios.put(
//       `/api/v1/admin/WANTBOOK/${id}`,
//       WANTBOOKData,
//       config
//     );

//     dispatch({
//       type: UPDATE_WANTBOOK_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_WANTBOOK_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };
// // Delete WANTBOOK
// export const deleteWANTBOOK = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_WANTBOOK_REQUEST });

//     const { data } = await axios.delete(`/api/v1/admin/WANTBOOK/${id}`);

//     dispatch({
//       type: DELETE_WANTBOOK_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_WANTBOOK_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };
// //Get WANTBOOK Details
// export const getWANTBOOKDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: WANTBOOK_DETAILS_REQUEST });

//     const { data } = await axios.get(`/api/v1/WANTBOOK/${id}`);

//     dispatch({
//       type: WANTBOOK_DETAILS_SUCCESS,
//       payload: data.WANTBOOK,
//     });
//   } catch (error) {
//     dispatch({
//       type: WANTBOOK_DETAILS_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

//Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
