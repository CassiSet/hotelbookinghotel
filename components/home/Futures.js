import {
  WifiIcon,
  CalendarIcon,
  BeakerIcon,
  CakeIcon,
} from '@heroicons/react/solid';
const Futures = () => {
  return (
    <div>
      <div className=' w-4/6 mx-auto justify-center grid grid-cols-4 gap-6 pt-4'>
        <div className='flex flex-col justify-center items-center text-center bg-red hover:shadow-sm hover:shadow-zinc-500 py-10 duration-200 ease-out transition'>
          <div>
            <WifiIcon className='h-14 text-[#87a13c]' />
          </div>
          <h1 className='pb-5 text-2xl capitalize '>Wifi</h1>
          <h3>Cras eu lorem a finibus velit nec felis mollis suscipit</h3>
        </div>
        <div className='flex flex-col justify-center items-center text-center bg-red hover:shadow-sm hover:shadow-zinc-500 py-10 duration-200 ease-out transition'>
          <div>
            <CalendarIcon className='h-14 text-[#87a13c]' />
          </div>
          <h1 className='pb-5 text-2xl capitalize '>Reservation en ligne</h1>
          <h3>Cras eu lorem a finibus velit nec felis mollis suscipit</h3>
        </div>
        <div className='flex flex-col justify-center items-center text-center bg-red hover:shadow-sm hover:shadow-zinc-500 py-10 duration-200 ease-out transition'>
          <div>
            <BeakerIcon className='h-14 text-[#87a13c]' />
          </div>
          <h1 className='pb-5 text-2xl capitalize '>Piscine</h1>
          <h3>Cras eu lorem a finibus velit nec felis mollis suscipit</h3>
        </div>
        <div className='flex flex-col justify-center items-center text-center bg-red hover:shadow-sm hover:shadow-zinc-500 py-10 duration-200 ease-out transition'>
          <div>
            <CakeIcon className='h-14 text-[#87a13c]' />
          </div>
          <h1 className='pb-5 text-2xl capitalize '>Petit dejeuner</h1>
          <h3>Cras eu lorem a finibus velit nec felis mollis suscipit</h3>
        </div>
      </div>
    </div>
  );
};

export default Futures;
