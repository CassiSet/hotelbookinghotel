import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import {
  ALL_BOOKING_FAIL,
  ALL_BOOKING_REQUEST,
  ALL_BOOKING_SUCCESS,
  BOOKING_DAYS_FAIL,
  BOOKING_DAYS_REQUEST,
  BOOKING_DAYS_SUCCESS,
  CHECKING_BOOKING_FAIL,
  CHECKING_BOOKING_REQUEST,
  CHECKING_BOOKING_SUCCESS,
  DAYS_STATS_FAIL,
  DAYS_STATS_REQUEST,
  DAYS_STATS_SUCCESS,
  MONTH_STATS_FAIL,
  MONTH_STATS_REQUEST,
  MONTH_STATS_SUCCESS,
} from '../constants/BookingConstants';

export const checkBooking =
  (roomId, checkInDate, checkOutDate) => async (dispatch) => {
    try {
      dispatch({
        type: CHECKING_BOOKING_REQUEST,
      });

      const { data } = await axios.get(
        `/api/bookings/checking-booking-days/?roomId=${roomId}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
      );

      dispatch({
        type: CHECKING_BOOKING_SUCCESS,
        payload: data.isAvalable,
      });
    } catch (error) {
      dispatch({
        type: CHECKING_BOOKING_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const BookingDays = (roomId) => async (dispatch) => {
  try {
    dispatch({
      type: BOOKING_DAYS_REQUEST,
    });

    const { data } = await axios.get(
      `/api/bookings/get_bookings_days?roomId=${roomId}`
    );

    dispatch({
      type: BOOKING_DAYS_SUCCESS,
      payload: data.bookingDays,
    });
  } catch (error) {
    dispatch({
      type: BOOKING_DAYS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const MyBooking = (roomId) => async (dispatch) => {
  try {
    dispatch({
      type: MY_BOOKING_REQUEST,
    });

    const { data } = await axios.get(`/api/me/booking`);

    dispatch({
      type: MY_BOOKING_SUCCESS,
      payload: data.bookingDays,
    });
  } catch (error) {
    dispatch({
      type: MY_BOOKING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const MonthStats = (year, month) => async (dispatch) => {
  try {
    dispatch({
      type: MONTH_STATS_REQUEST,
    });
    console.log(year, month);
    const { data } = await axios.get(
      `/api/bookings/month-stats?year=${year}&month=${month}`
    );

    dispatch({
      type: MONTH_STATS_SUCCESS,
      payload: data.monthstats,
    });
  } catch (error) {
    dispatch({
      type: MONTH_STATS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DayStats = (dmonth, dyear, day) => async (dispatch) => {
  try {
    dispatch({
      type: DAYS_STATS_REQUEST,
    });
    console.log(dmonth);
    const { data } = await axios.get(
      `/api/bookings/days-stats?dmonth=${dmonth}&dyear=${dyear}&day=${day}`
    );

    dispatch({
      type: DAYS_STATS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DAYS_STATS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AllBooking = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_BOOKING_REQUEST,
    });

    const { data } = await axios.get(
      `/api/bookings/allbookings?keyword=${keyword}`
    );

    // console.log(data);

    dispatch({
      type: ALL_BOOKING_SUCCESS,
      payload: data.booking,
    });
  } catch (error) {
    dispatch({
      type: ALL_BOOKING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
