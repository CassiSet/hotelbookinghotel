import React from 'react';
import { BiBed } from 'react-icons/bi';
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi';
import { FaBed } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const Revenu = () => {
  const { statsMont } = useSelector((state) => state.mYMonthStat);
  const { statsDay, statsweek } = useSelector((state) => state.mYdayStat);
  return (
    <div>
      <div className='grid grid-cols-4  space-x-4 mt-4'>
        <div className='hovericon shadow-md bg-white rounded-[10px] p-4 hover:shadow-2xl flex items-center space-x-2 transition duration-700 ease-in-out'>
          <div className=' bg-[#efdfb8] p-2 rounded-md  hover:text-white bed transition duration-700 ease-in-out'>
            <BiBed className=' text-[40px] text-[#53651b] icon transition duration-700 ease-in-out' />
          </div>
          <div>
            <h2 className=' text-3xl font-bold'>461</h2>
            <h3 className=' text-lg opacity-70 text-black'>Chambres</h3>
          </div>
        </div>
        <div className='hovericon shadow-md bg-white rounded-[10px] p-4 hover:shadow-2xl flex items-center space-x-2 transition duration-700 ease-in-out'>
          <div className=' bg-[#efdfb8] p-2 rounded-md  hover:text-white bed transition duration-700 ease-in-out'>
            <FaBed className=' text-[40px] text-[#53651b] icon transition duration-700 ease-in-out' />
          </div>
          <div>
            <h2 className=' text-3xl font-bold'>
              {statsDay ? statsDay[0]?.totalBoking : ''}
            </h2>
            <h3 className=' text-lg opacity-70 text-black'>Réservations</h3>
          </div>
        </div>
        <div className='hovericon shadow-md bg-white rounded-[10px] p-4 hover:shadow-2xl flex items-center space-x-2 transition duration-700 ease-in-out'>
          <div className=' bg-[#efdfb8] p-2 rounded-md  hover:text-white bed transition duration-700 ease-in-out'>
            <GiMoneyStack className=' text-[40px] text-[#53651b] icon transition duration-700 ease-in-out' />
          </div>
          <div>
            <h2 className=' text-3xl font-bold'>
              {statsMont ? statsMont[0]?.amoutTotal : ''}
              <span className=' text-sm italic'>Fcfa</span>
            </h2>
            <h3 className=' text-lg opacity-70 text-black'>
              Total revenue du mois
            </h3>
          </div>
        </div>
        <div className='hovericon shadow-md bg-white rounded-[10px] p-4 hover:shadow-2xl flex items-center space-x-2 transition duration-700 ease-in-out'>
          <div className=' bg-[#efdfb8] p-2 rounded-md  hover:text-white bed transition duration-700 ease-in-out'>
            <GiTakeMyMoney className=' text-[40px] text-[#53651b] icon transition duration-700 ease-in-out' />
          </div>
          <div>
            <h2 className=' text-3xl font-bold'>
              {statsweek ? statsweek[0]?.amoutTotal : ''}{' '}
              <span className=' text-sm italic'>Fcfa</span>
            </h2>
            <h3 className=' text-lg opacity-70 text-black'>
              Total revenue de la semaine
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenu;
