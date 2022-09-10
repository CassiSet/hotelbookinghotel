import React, { useState, useEffect } from 'react';
import { BiEdit } from 'react-icons/bi';
import { AiFillEye } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { AllBooking } from '../../redux/actions/bookingAction';
import { useDispatch, useSelector } from 'react-redux';

const Booking = () => {
  const [keyword, setKeyword] = useState('');

  const AllBookingre = useSelector((state) => state.AllBookingre);
  const { bookings } = AllBookingre;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllBooking(keyword));
  }, [keyword]);
  return (
    <div className='pt-10'>
      <div className='shadow-md bg-white rounded-[10px] p-4  flex flex-col'>
        <div className='flex justify-between items-center pb-3'>
          <h2 className=' text-md font-medium pb-2'>Réservations recentes</h2>
          <form>
            <label className='flex relative bg-[#ececec] p-1 rounded-[10px] shadow-md '>
              <input
                className='bg-[#ececec] '
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
              />
              <BsSearch className=' absolute right-0 text-2xl text-gray-500' />
            </label>
          </form>
        </div>
        <hr className='pb-4' />
        <table>
          <thead>
            <tr className=' bg-[#000000] text-white'>
              <th>Numéro</th>
              <th>Nom du client</th>
              <th>
                <div className=' flex items-center justify-center w-full'>
                  Status
                </div>
              </th>
              <th>Date de reservations</th>
              <th>
                <div className=' flex items-center justify-center w-full'>
                  Details
                </div>
              </th>
              <th>
                <div className=' flex items-center justify-center w-full'>
                  modifier
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings
              ? bookings?.map((book) => (
                  <>
                    <tr
                      className=' hover:bg-gray-200 transition duration-400 ease-in-out'
                      key={book._id}
                    >
                      <td>Alfreds Futterkiste</td>
                      <td>{book?.user?.name}</td>
                      <td>
                        <div className=' bg-[#e23428]  w-[50%] p-1 mx-auto text-center rounded-md text-[14px] text-white'>
                          Terminé
                        </div>
                      </td>
                      <td>Maria Anders</td>
                      <td>
                        <div className=' flex items-center justify-center w-full'>
                          <AiFillEye className=' text-[30px] text-[#e23428] icon transition duration-700 ease-in-out cursor-pointer' />
                        </div>
                      </td>
                      <td>
                        <div className=' flex items-center justify-center w-full'>
                          <BiEdit className=' text-[30px] text-[#2d741d] icon transition duration-700 ease-in-out cursor-pointer' />
                        </div>
                      </td>
                    </tr>
                  </>
                ))
              : ''}

            <tr className=' hover:bg-gray-200 transition duration-400 ease-in-out'>
              <td>Centro comercial Moctezuma</td>
              <td>Maria Anders</td>
              <td>
                <div className=' bg-[#fb9f44] w-[50%] p-1 mx-auto text-center rounded-md text-[14px] text-white'>
                  encours
                </div>
              </td>
              <td>Mexico</td>
              <td>
                <div className=' flex items-center justify-center w-full'>
                  <AiFillEye className=' text-[30px] text-[#e23428] icon transition duration-700 ease-in-out cursor-pointer' />
                </div>
              </td>
              <td>
                <div className=' flex items-center justify-center w-full'>
                  <BiEdit className=' text-[30px] text-[#2d741d] icon transition duration-700 ease-in-out cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className=' hover:bg-gray-200 transition duration-400 ease-in-out'>
              <td>Ernst Handel</td>
              <td>Maria Anders</td>
              <td>
                <div className=' bg-[#109618] w-[50%] p-1 mx-auto text-center rounded-md text-[14px] text-white'>
                  Annulé
                </div>
              </td>
              <td>Roland Mendel</td>
              <td>
                <div className=' flex items-center justify-center w-full'>
                  <AiFillEye className=' text-[30px] text-[#e23428] icon transition duration-700 ease-in-out cursor-pointer' />
                </div>
              </td>
              <td>
                <div className=' flex items-center justify-center w-full'>
                  <BiEdit className=' text-[30px] text-[#2d741d] icon transition duration-700 ease-in-out cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className=' hover:bg-gray-200 transition duration-400 ease-in-out'>
              <td>Island Trading</td>
              <td>Maria Anders</td>
              <td>
                <div className=' bg-[#fb9f44] w-[50%] p-1 mx-auto text-center rounded-md text-[14px] text-white'>
                  encours
                </div>
              </td>
              <td>Helen Bennett</td>
              <td>
                <div className=' flex items-center justify-center w-full'>
                  <AiFillEye className=' text-[30px] text-[#e23428] icon transition duration-700 ease-in-out cursor-pointer' />
                </div>
              </td>
              <td>
                <div className=' flex items-center justify-center w-full'>
                  <BiEdit className=' text-[30px] text-[#2d741d] icon transition duration-700 ease-in-out cursor-pointer' />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
