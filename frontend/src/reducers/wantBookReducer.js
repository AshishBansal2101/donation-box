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
  NEW_WANTBOOK_RESET,
  UPDATE_WANTBOOK_FAIL,
  UPDATE_WANTBOOK_REQUEST,
  UPDATE_WANTBOOK_RESET,
  UPDATE_WANTBOOK_SUCCESS,
  DELETE_WANTBOOK_REQUEST,
  DELETE_WANTBOOK_SUCCESS,
  DELETE_WANTBOOK_FAIL,
  DELETE_WANTBOOK_RESET,
  WANTBOOK_DETAILS_REQUEST,
  WANTBOOK_DETAILS_FAIL,
  WANTBOOK_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/wantBookConstants";

export const wantBookReducer = (state = { wantBook: [] }, action) => {
  switch (action.type) {
    // case ALL_WANTBOOK_REQUEST:
    case ADMIN_WANTBOOK_REQUEST:
      return {
        loading: true,
        wantBook: [],
      };
    case ALL_WANTBOOK_SUCCESS:
      return {
        loading: false,
        wantBook: action.payload.wantBook,
        wantBookCount: action.payload.wantBookCount,
        wantBookPerPage: action.payload.resultsPerPage,
        filteredWantBookCount: action.payload.filteredWantBook,
      };
    case ADMIN_WANTBOOK_SUCCESS:
      return {
        loading: false,
        wantBook: action.payload,
      };
    case ALL_WANTBOOK_FAIL:
    case ADMIN_WANTBOOK_FAIL:
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

export const newWantBookReducer = (state = { wantBook: {} }, action) => {
  // console.log("heeeeee");
  switch (action.type) {
    case NEW_WANTBOOK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_WANTBOOK_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        wantBook: action.payload.wantBook,
      };
    case NEW_WANTBOOK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_WANTBOOK_RESET:
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

//   export const WANTBOOKReducer = (state = {}, action) => {
//     switch (action.type) {
//       case DELETE_WANTBOOK_REQUEST:
//       case UPDATE_WANTBOOK_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };
//       case DELETE_WANTBOOK_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           isDeleted: action.payload,
//         };

//       case UPDATE_WANTBOOK_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           isUpdated: action.payload,
//         };
//       case DELETE_WANTBOOK_FAIL:
//       case UPDATE_WANTBOOK_FAIL:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       case DELETE_WANTBOOK_RESET:
//         return {
//           ...state,
//           isDeleted: false,
//         };
//       case UPDATE_WANTBOOK_RESET:
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

//   export const WANTBOOKDetailsReducer = (state = { WANTBOOK: {} }, action) => {
//     switch (action.type) {
//       case WANTBOOK_DETAILS_REQUEST:
//         return {
//           loading: true,
//           ...state,
//         };
//       case WANTBOOK_DETAILS_SUCCESS:
//         return {
//           loading: false,
//           WANTBOOK: action.payload,
//         };
//       case WANTBOOK_DETAILS_FAIL:
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
