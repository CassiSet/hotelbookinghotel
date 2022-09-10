import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { userRegisterReducer } from './reducers/userReducers';
import {
  createRoomsReducer,
  allRoomsReducer,
  DetailsRoomsReducer,
  RoomSearchReducer,
} from './reducers/roomReducers';
import {
  AllBookingReducer,
  BookingDaysReducer,
  CheckBookingReducer,
  mYBookingReducer,
  mYdayStatReducer,
  mYMonthStatReducer,
} from './reducers/bookingReducers';

// const combinedReducer = combineReducers({
//   allRooms: allRoomsReducer,
//   userRegister: userRegisterReducer,
//   createRooms: createRoomsReducer,
// });

// const reducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state,
//       ...action.payload, // apply delta from hydration
//     };
//     return nextState;
//   } else {
//     return combinedReducer(state, action);
//   }
// };

// export const Store = configureStore({
//   reducer,
//   devTools: process.env.NODE_ENV !== 'production', //only show devTools when in production
// });

// // const wrapper = createWrapper(store);

// export const wrapper = createWrapper(Store, { debug: true });

const combinedReducer = combineReducers({
  allRooms: allRoomsReducer,
  userRegister: userRegisterReducer,
  createRooms: createRoomsReducer,
  DetailsRooms: DetailsRoomsReducer,
  CheckBooking: CheckBookingReducer,
  BookingDays: BookingDaysReducer,
  mYBooking: mYBookingReducer,
  RoomSearch: RoomSearchReducer,
  mYMonthStat: mYMonthStatReducer,
  mYdayStat: mYdayStatReducer,
  AllBookingre: AllBookingReducer,
});
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

const makeStore = () => store;
export const wrapper = createWrapper(makeStore, { debug: true });
