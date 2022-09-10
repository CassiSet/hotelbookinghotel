import {
  CHECKING_BOOKING_FAIL,
  CHECKING_BOOKING_SUCCESS,
  CHECKING_BOOKING_RESET,
  CHECKING_BOOKING_REQUEST,
  BOOKING_DAYS_REQUEST,
  BOOKING_DAYS_SUCCESS,
  BOOKING_DAYS_FAIL,
  MY_BOOKING_REQUEST,
  MY_BOOKING_SUCCESS,
  MY_BOOKING_FAIL,
  MONTH_STATS_REQUEST,
  MONTH_STATS_SUCCESS,
  MONTH_STATS_FAIL,
  DAYS_STATS_REQUEST,
  DAYS_STATS_SUCCESS,
  DAYS_STATS_FAIL,
  ALL_BOOKING_REQUEST,
  ALL_BOOKING_SUCCESS,
  ALL_BOOKING_FAIL,
} from '../constants/BookingConstants';

export const CheckBookingReducer = (state = { isAvalable: null }, action) => {
  switch (action.type) {
    case CHECKING_BOOKING_REQUEST:
      return { loading: true };
    case CHECKING_BOOKING_SUCCESS:
      return { loading: false, isAvalable: action.payload };
    case CHECKING_BOOKING_FAIL:
      return { loading: false, error: action.payload };
    case CHECKING_BOOKING_RESET:
      return {};
    default:
      return state;
  }
};

export const BookingDaysReducer = (state = { Days: [] }, action) => {
  switch (action.type) {
    case BOOKING_DAYS_REQUEST:
      return { loading: true };
    case BOOKING_DAYS_SUCCESS:
      return { loading: false, Days: action.payload };
    case BOOKING_DAYS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const mYBookingReducer = (state = { MyBooking: [] }, action) => {
  switch (action.type) {
    case MY_BOOKING_REQUEST:
      return { loading: true };
    case MY_BOOKING_SUCCESS:
      return { loading: false, MyBooking: action.payload };
    case MY_BOOKING_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const mYMonthStatReducer = (state = { statsMont: [] }, action) => {
  switch (action.type) {
    case MONTH_STATS_REQUEST:
      return { loading: true };
    case MONTH_STATS_SUCCESS:
      return { loading: false, statsMont: action.payload };
    case MONTH_STATS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const mYdayStatReducer = (
  state = { statsDay: [], statsweek: [] },
  action
) => {
  switch (action.type) {
    case DAYS_STATS_REQUEST:
      return { loading: true };
    case DAYS_STATS_SUCCESS:
      return {
        loading: false,
        statsDay: action.payload.stats,
        statsweek: action.payload.weekstats,
      };
    case DAYS_STATS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const AllBookingReducer = (state = { bookings: [] }, action) => {
  switch (action.type) {
    case ALL_BOOKING_REQUEST:
      return { loading: true };
    case ALL_BOOKING_SUCCESS:
      return { loading: false, bookings: action.payload };
    case ALL_BOOKING_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
