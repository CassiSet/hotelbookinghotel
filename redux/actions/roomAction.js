import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
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

export const createRoom = (room) => async (dispatch) => {
  try {
    dispatch({
      type: CREAT_ROOM_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`/api/rooms`, room, config);

    dispatch({
      type: CREAT_ROOM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREAT_ROOM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllRoom = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    dispatch({
      type: ALL_ROOM_REQUEST,
    });

    const { data } = await axios.get(`${origin}/api/rooms`);
    console.log(data);
    dispatch({
      type: ALL_ROOM_SUCCESS,
      payload: data.room,
    });
  } catch (error) {
    dispatch({
      type: ALL_ROOM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getDetailsRoom = (req, id) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    dispatch({
      type: DETAILS_ROOM_REQUEST,
    });

    const { data } = await axios.get(`${origin}/api/rooms/${id}`);

    dispatch({
      type: DETAILS_ROOM_SUCCESS,
      payload: data.room,
    });
  } catch (error) {
    dispatch({
      type: DETAILS_ROOM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const SeachRoom = (checkInDate, checkOutDate) => async (dispatch) => {
  try {
    // const { origin } = absoluteUrl(req);
    dispatch({
      type: ROOM_SEARCH_REQUEST,
    });
    console.log('date', checkOutDate);
    const { data } = await axios.get(
      `/api/rooms/search?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
    );

    dispatch({
      type: ROOM_SEARCH_SUCCESS,
      payload: data.room,
    });
  } catch (error) {
    dispatch({
      type: ROOM_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
