import React from 'react';
import {
  ArrowsExpandIcon,
  UserGroupIcon,
  ViewGridAddIcon,
  WifiIcon,
  FingerPrintIcon,
  CheckIcon,
  XIcon,
} from '@heroicons/react/outline';
import { useSelector } from 'react-redux';

const Infos = () => {
  const { room } = useSelector((state) => state.DetailsRooms);
  return (
    <div className='pt-2 pb-5'>
      <div className='flex items-center justify-between w-full py-3 space-x-2'>
        <div className='flex flex-col items-center capitalize'>
          <ArrowsExpandIcon className='h-12 text-gray-700 opacity-50' />
          <h3 className='lowercase'>{room.roomSize} m2</h3>
        </div>
        <div className='flex flex-col items-center capitalize'>
          <UserGroupIcon className='h-12 text-gray-700 opacity-50' />
          <h3>{room.capacityGuess} Personnes</h3>
        </div>
        <div className='flex flex-col items-center capitalize'>
          <ViewGridAddIcon className='h-12 text-gray-700 opacity-50' />
          <h3>{room.category}</h3>
        </div>
      </div>
      <hr />
      <div className='py-4'>
        <h3 className='text-2xl opacity-40 text-emerald-900'>Desecription</h3>
        <p>{room.description}</p>
      </div>
      <hr />
      <div className='py-4'>
        <h3 className='text-2xl opacity-40 text-emerald-900'>
          Service de chambre
        </h3>
        <div className='grid grid-cols-2'>
          <div className='flex items-center space-x-2'>
            <WifiIcon className='text-gray-700 opacity-50 h-9' />
            <div className='flex items-center'>
              <h3>Wifi:</h3>{' '}
              {room.internet === 'Oui' ? (
                <CheckIcon className='h-5 px-5 text-green-700' />
              ) : (
                <XIcon className='h-5 px-10 text-red-800' />
              )}
            </div>
          </div>
          <div className='flex items-center space-x-2'>
            <FingerPrintIcon className='text-gray-700 opacity-50 h-9' />
            <div className='flex items-center'>
              <h3>Animaux:</h3>{' '}
              {room.internet === 'Oui' ? (
                <CheckIcon className='h-5 px-5 text-green-700' />
              ) : (
                <XIcon className='h-5 px-10 text-red-800' />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
