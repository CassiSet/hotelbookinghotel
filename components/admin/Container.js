import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr);
import { GiReceiveMoney } from 'react-icons/gi';
import { Chart } from 'react-google-charts';
import { useDispatch, useSelector } from 'react-redux';
import { MonthStats, DayStats } from '../../redux/actions/bookingAction';

export const data = [
  ['Task', 'Hours per Day'],
  ['Work', 11],
  ['Eat', 2],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', 7],
];

export const options = {
  title: ' Activité mensuelle',
  is3D: true,
};

const Container = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [checkingdate, setCheckingdate] = useState(new Date());

  const dmonth = checkingdate.getMonth() + 1;
  const dyear = checkingdate.getFullYear();
  const day = checkingdate.getDate();

  const year = startDate.getFullYear();
  const month = startDate.getMonth() + 1;

  const { statsDay } = useSelector((state) => state.mYdayStat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MonthStats(year, month));
  }, [startDate]);

  useEffect(() => {
    dispatch(DayStats(dmonth, dyear, day));
  }, [checkingdate]);

  return (
    <div>
      <div className='grid grid-cols-2  space-x-4 mt-4 h-80'>
        <div className='shadow-md bg-white rounded-[10px] p-4  flex items-center space-x-8 '>
          <div className='flex flex-col'>
            <div className=' pb-5'>
              <h2 className=' text-md font-medium'>Revenue journalier</h2>
            </div>
            <DatePicker
              locale='fr'
              selected={checkingdate}
              onChange={(date) => setCheckingdate(date)}
              inline
            />
          </div>
          <div className=' h-[90%] w-full pt-7 hovericon'>
            <div className=' bg-[#efdfb8] px-2 py-4 rounded-md  hover:text-white  transition duration-700 ease-in-out bed h-full flex flex-col'>
              <div>
                <GiReceiveMoney className=' text-[80px] text-[#667f1a] icon transition duration-700 ease-in-out' />
              </div>
              <div>
                <h2 className=' text-4xl font-bold'>
                  <span className=' text-sm italic'>Fcfa</span>
                  {statsDay ? statsDay[0]?.amoutTotal : ''}
                </h2>
                <h3 className=' text-xl opacity-70 text-black icon hover:opacity-100'>
                  Total revenue de la journalier
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className='shadow-md bg-white rounded-[10px] p-4  grid items-center  grid-cols-2'>
          <div className='flex flex-col'>
            <div className=' pb-5'>
              <h2 className=' text-md font-medium'>Carte statistique</h2>
            </div>
            <div className=' '>
              <DatePicker
                locale='fr'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                inline
                dateFormat='MM/yyyy'
                showMonthYearPicker
              />
            </div>
          </div>
          <div className=' h-[90%] w-full pt-7 hovericon'>
            <Chart
              chartType='PieChart'
              data={data}
              options={options}
              width={'300px'}
              height={'100%'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
