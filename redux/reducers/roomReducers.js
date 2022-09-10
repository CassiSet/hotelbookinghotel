import {
  ALL_ROOM_FAIL,
  ALL_ROOM_REQUEST,
  ALL_ROOM_SUCCESS,
  CREAT_ROOM_FAIL,
  CREAT_ROOM_REQUEST,
  CREAT_ROOM_SUCCESS,
  DETAILS_ROOM_FAIL,
  DETAILS_ROOM_REQUEST,
  DETAILS_ROOM_SUCCESS,
  ROOM_SEARCH_FAIL,
  ROOM_SEARCH_REQUEST,
  ROOM_SEARCH_SUCCESS,
} from '../constants/roomConstants';

export const createRoomsReducer = (state = {}, action) => {
  switch (action.type) {
    case CREAT_ROOM_REQUEST:
      return { loading: true };
    case CREAT_ROOM_SUCCESS:
      return { loading: false, success: true, room: action.payload };
    case CREAT_ROOM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const allRoomsReducer = (state = { room: [] }, action) => {
  switch (action.type) {
    case ALL_ROOM_REQUEST:
      return { loading: true, room: [] };
    case ALL_ROOM_SUCCESS:
      return { loading: false, room: action.payload };
    case ALL_ROOM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const DetailsRoomsReducer = (state = { room: {} }, action) => {
  switch (action.type) {
    case DETAILS_ROOM_REQUEST:
      return { loading: true };
    case DETAILS_ROOM_SUCCESS:
      return { loading: false, room: action.payload };
    case DETAILS_ROOM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const RoomSearchReducer = (state = { room: [] }, action) => {
  switch (action.type) {
    case ROOM_SEARCH_REQUEST:
      return { loading: true };
    case ROOM_SEARCH_SUCCESS:
      return { loading: false, room: action.payload };
    case ROOM_SEARCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
