import { SearchIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import { useRouter } from 'next/router';

registerLocale('fr', fr);

const Search = () => {
  const [checkInDate, setCheckInDate] = useState(Date.now());
  const [checkOutDate, setCheckOutDate] = useState(Date.now());

  const route = useRouter();

  const searchHandler = (e) => {
    e.preventDefault();
    const dates = [];
    const checkIn = new Date(checkInDate).toISOString();
    const checkOut = new Date(checkOutDate).toISOString();

    if (checkInDate & checkOutDate) {
      dates.push(checkInDate, checkOutDate);
      console.log(dates);
    }
    const path = `/chambre/${checkIn}/${checkOut}`;
    route.push(path);
  };

  const onChange = (dates) => {
    // const [checkInDate, checkOutDate] = dates;
    setCheckInDate(checkInDate);
    setCheckOutDate(checkOutDate);
    if (checkInDate & checkOutDate) {
      const [checkInDate, checkOutDate] = dates;
    }
  };
  return (
    <div className='pt-5 '>
      <h3 className='py-6 text-center text-white'>
        A Cannan vous êtes bien chez vous, Nos chambres à partir de 35000 Fcfa/
        Nuit
      </h3>
      <div className='px-8 py-2 bg-white rounded-md shadow-2xl shadow-black'>
        <form
          className='flex items-center justify-between w-full grid-cols-2 space-x-2'
          onSubmit={searchHandler}
        >
          {/* <div>
            <input type='text' placeholder='nom' className='bg-gray-100' />
          </div> */}

          <div className='flex'>
            <div className='flex flex-col'>
              <h3 className='font-semibold '>{`Date d'entrée:`}</h3>
              <DatePicker
                locale='fr'
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                selectsStart
                startDate={checkInDate}
                minDate={new Date()}
                endDate={checkOutDate}
              />
            </div>
            <div className='flex flex-col'>
              <h3 className='font-semibold '>Date de sortie:</h3>
              <DatePicker
                locale='fr'
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                selectsEnd
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={checkInDate}
              />
            </div>
          </div>
          <div>
            <button
              className='flex items-center px-5 py-1 text-center text-[#101010] transition duration-200 ease-out bg-[#efb70d] rounded-md shadow-md shadow-black hover:bg-[#cf9c06]'
              type='submit'
            >
              <SearchIcon className='h-5' />
              <h3>Recherche</h3>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
