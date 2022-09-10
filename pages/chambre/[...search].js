import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Room from '../../components/chambre/Room';
import Sidebar from '../../components/chambre/Sidebar';
import Top from '../../components/chambre/Top';
import { SeachRoom } from '../../redux/actions/roomAction';
import { wrapper } from '../../redux/store';

const Search = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const UrlData = route.query.search;

  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();

  useEffect(() => {
    if (UrlData !== undefined) {
      const checkIn = localStorage.setItem('checkInDate', UrlData[0]);
      const checkOut = localStorage.setItem('checkOutDate', UrlData[1]);
    }
    const checkIn = localStorage.getItem('checkInDate');
    const checkOut = localStorage.getItem('checkOutDate');

    const checkInDate = UrlData ? UrlData[0] : checkIn;
    const checkOutDate = UrlData ? UrlData[1] : checkOut;
    setCheckInDate(checkInDate);
    setCheckOutDate(checkOutDate);

    dispatch(SeachRoom(checkInDate, checkOutDate));
  }, [dispatch, UrlData]);

  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const datechekin = checkIn.toLocaleDateString('fr', options);
  const datechekout = checkOut.toLocaleDateString('fr', options);

  const { room } = useSelector((state) => state.RoomSearch);
  const gridCol = 'grid grid-cols-2 gap-8 pt-5';

  const title = (
    <h3>
      Resultat de recherche du {datechekin} au {datechekout}
    </h3>
  );

  const headerImage = '/chome.jpeg';

  return (
    <div className=' bg-[#f3f4f6] min-h-[100vh]'>
      <Top title={title} headerImage={headerImage} />
      <div className='flex flex-wrap w-[70%] mx-auto space-x-4'>
        <div className=' basis-[64%]'>
          <Room room={room} gridCol={gridCol} />
        </div>
        <div className=' basis-[30%] mt-8 bg-white rounded-[1rem] shadow-md p-5 h-[60vh]'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, checkInDate, checkOutDate, res }) => {
//       console.log(checkInDate);
//       await store.dispatch(SeachRoom(req, checkInDate, checkOutDate));
//     }
// );

export default Search;
