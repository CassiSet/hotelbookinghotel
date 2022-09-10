import { useSelector, useDispatch } from 'react-redux';
import CarouselImage from './CarouselImage';
import { useState } from 'react';
import Infos from './Infos';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr);

import axios from 'axios';
import { useRouter } from 'next/router';
import { checkBooking, BookingDays } from '../../redux/actions/bookingAction';
import { CHECKING_BOOKING_RESET } from '../../redux/constants/BookingConstants';
import { useEffect } from 'react';

const Details = () => {
  const { room } = useSelector((state) => state.DetailsRooms);
  const { isAvalable, loading: bookingLoading } = useSelector(
    (state) => state.CheckBooking
  );
  const { Days, loading: bookingDaysLoading } = useSelector(
    (state) => state.BookingDays
  );

  const excluDays = [];
  Days?.forEach((day) => {
    excluDays.push(new Date(day));
  });

  const dispatch = useDispatch();

  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [dateOfStays, setDateOfStays] = useState('');
  const [loading, setLoading] = useState(false);

  const route = useRouter();
  const { id } = route.query;
  const roomId = id;

  useEffect(() => {
    dispatch(BookingDays(id));
  }, [dispatch, id]);

  const onChange = (dates) => {
    const [checkInDate, checkOutDate] = dates;
    setCheckInDate(checkInDate);
    setCheckOutDate(checkOutDate);
    if (checkInDate & checkOutDate) {
      const days = Math.floor(
        (new Date(checkOutDate) - new Date(checkInDate)) / 86400000 + 1
      );
      setDateOfStays(days);
      console.log(days);
      dispatch(
        checkBooking(id, checkInDate.toISOString(), checkOutDate.toISOString())
      );
      console.log(isAvalable);
    }
    console.log(checkInDate);
  };

  const newBookinHandler = async () => {
    const bookingData = {
      room: route.query.id,
      roomname: room.name,
      amoutPaid: 12000,
      checkInDate: checkInDate.toISOString(),
      checkOutDate: checkOutDate.toISOString(),
      dateOfStays,
    };

    console.log(bookingData);

    try {
      setLoading(true);
      const config = {
        Headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        '/api/bookings/create',
        bookingData,
        config
      );
      setLoading(false);
    } catch (error) {}
  };

  return (
    <div className='flex flex-wrap w-4/6 pt-4 mx-auto space-x-3'>
      <div className=' basis-7/12'>
        <div className='flex justify-between'>
          <h1 className='font-sans text-2xl font-bold capitalize'>
            {room.name}
          </h1>
          <div className='flex space-x-1 font-mono text-xl font-bold'>
            <h3 className='italic opacity-70'>Prix:</h3>
            <h1>
              <span className='font-serif text-2xl font-bold text-green-900'>
                {room.price}
              </span>
              Fcfa/Nuit
            </h1>
          </div>
        </div>
        <CarouselImage />
        <Infos />
      </div>
      <div className='sticky basis-3/12'>
        <div className='px-5 py-5 text-center text-white bg-green-900 shadow-md shadow-black'>
          <h3 className='py-5 text-xl font-bold'>Votre Reservation</h3>
          <div>
            <div className='flex flex-col space-y-3'>
              <DatePicker
                locale='fr'
                selected={checkInDate}
                onChange={onChange}
                startDate={checkInDate}
                endDate={checkOutDate}
                excludeDates={excluDays}
                minDate={new Date()}
                selectsRange
                selectsDisabledDaysInRange
                inline
                className='w-full '
              />

              {isAvalable === false && (
                <div className='p-4 bg-red-100 rounded-sm'>
                  <p className='font-bold text-red-700'>
                    Chambre non disponible pour la periode de reservation.
                    veuillez selectionner une autre date réservation!
                  </p>
                </div>
              )}

              {isAvalable === true && (
                <>
                  <div className='p-4 bg-green-200 rounded-sm'>
                    <p className='font-bold text-green-700'>
                      Chambre disponible pour réservation!
                    </p>
                  </div>
                  <button
                    type='submit'
                    className='px-5 py-2 transition duration-100 ease-in-out bg-gray-800 hover:bg-gray-900'
                    onClick={newBookinHandler}
                  >
                    Reserver maitenant
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
