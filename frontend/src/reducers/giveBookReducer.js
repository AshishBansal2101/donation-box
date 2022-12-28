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
  NEW_GIVEBOOK_RESET,
  UPDATE_GIVEBOOK_FAIL,
  UPDATE_GIVEBOOK_REQUEST,
  UPDATE_GIVEBOOK_RESET,
  UPDATE_GIVEBOOK_SUCCESS,
  DELETE_GIVEBOOK_REQUEST,
  DELETE_GIVEBOOK_SUCCESS,
  DELETE_GIVEBOOK_FAIL,
  DELETE_GIVEBOOK_RESET,
  GIVEBOOK_DETAILS_REQUEST,
  GIVEBOOK_DETAILS_FAIL,
  GIVEBOOK_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/giveBookConstants";

export const giveBookReducer = (state = { giveBook: [] }, action) => {
  switch (action.type) {
    case ALL_GIVEBOOK_REQUEST:
    case ADMIN_GIVEBOOK_REQUEST:
      return {
        loading: true,
        giveBook: [],
      };
    case ALL_GIVEBOOK_SUCCESS:
      return {
        loading: false,
        giveBook: action.payload.giveBook,
        giveBookCount: action.payload.giveBookCount,
        giveBookPerPage: action.payload.resultsPerPage,
        filteredGiveBookCount: action.payload.filteredGiveBook,
      };
    case ADMIN_GIVEBOOK_SUCCESS:
      return {
        loading: false,
        giveBook: action.payload,
      };
    case ALL_GIVEBOOK_FAIL:
    case ADMIN_GIVEBOOK_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newGiveBookReducer = (state = { giveBook: {} }, action) => {
  // console.log("heeeeee");
  switch (action.type) {
    case NEW_GIVEBOOK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_GIVEBOOK_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        giveBook: action.payload.giveBook,
      };
    case NEW_GIVEBOOK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_GIVEBOOK_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

//   export const GIVEBOOKReducer = (state = {}, action) => {
//     switch (action.type) {
//       case DELETE_GIVEBOOK_REQUEST:
//       case UPDATE_GIVEBOOK_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };
//       case DELETE_GIVEBOOK_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           isDeleted: action.payload,
//         };

//       case UPDATE_GIVEBOOK_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           isUpdated: action.payload,
//         };
//       case DELETE_GIVEBOOK_FAIL:
//       case UPDATE_GIVEBOOK_FAIL:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       case DELETE_GIVEBOOK_RESET:
//         return {
//           ...state,
//           isDeleted: false,
//         };
//       case UPDATE_GIVEBOOK_RESET:
//         return {
//           ...state,
//           isUpdated: false,
//         };
//       case CLEAR_ERRORS:
//         return {
//           ...state,
//           error: null,
//         };
//       default:
//         return state;
//     }
//   };

//   export const GIVEBOOKDetailsReducer = (state = { GIVEBOOK: {} }, action) => {
//     switch (action.type) {
//       case GIVEBOOK_DETAILS_REQUEST:
//         return {
//           loading: true,
//           ...state,
//         };
//       case GIVEBOOK_DETAILS_SUCCESS:
//         return {
//           loading: false,
//           GIVEBOOK: action.payload,
//         };
//       case GIVEBOOK_DETAILS_FAIL:
//         return {
//           loading: false,
//           error: action.payload,
//         };
//       case CLEAR_ERRORS:
//         return {
//           ...state,
//           error: null,
//         };
//       default:
//         return state;
//     }
//   };
