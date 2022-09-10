import Image from 'next/image';
import { AiOutlineCoffee, AiOutlineWifi } from 'react-icons/ai';
import { ImSpoonKnife } from 'react-icons/im';
import { FaDesktop } from 'react-icons/fa';

import Link from 'next/link';

const Room = ({ room, gridCol, containerCol }) => {
  return (
    <div className='pb-10 bg-gray-100'>
      <div className={containerCol}>
        <div className='flex justify-between'>
          <div className='flex space-x-1'>
            <h3>Chambres:</h3>
            <h3>{room?.length}</h3>
          </div>
          <div>
            <form>
              <label>
                Tri par prix:
                <select className='border'>
                  <option>Plus chere</option>
                  <option>Moins Chere</option>
                </select>
              </label>
            </form>
          </div>
        </div>
        <div className={gridCol}>
          {room?.map((r) => (
            <>
              <div className='bg-white shadow-sm shadow-black'>
                <Link href={`/chambre/${r._id}`}>
                  <a>
                    <>
                      <div className='relative h-72'>
                        <Image
                          src={r.image[0].replace('/public\\', '/')}
                          layout='fill'
                          objectFit='cover'
                          alt='image'
                        />
                        <div className='absolute bottom-0 z-10 px-2 left-4'>
                          <h1 className='px-4 font-bold text-white uppercase bg-green-900 text-md'>
                            {r?.category}
                          </h1>
                        </div>
                      </div>
                      <h1 className='px-6 py-4 font-sans text-2xl font-medium text-black'>
                        {r?.name}
                      </h1>
                      <p className='px-6 pb-4 text-md'>
                        Make yourself comfortable in any of our serene guest
                        rooms and spacious suites...
                      </p>
                      <div className='flex items-center px-4 space-x-2 pb-7'>
                        <div className='px-2 border-r-2 border-neutral-400'>
                          <AiOutlineCoffee className='text-xl opacity-50 ' />
                        </div>
                        <div className='px-2 border-r-2 border-neutral-400'>
                          <AiOutlineWifi className='text-xl opacity-50 ' />
                        </div>
                        <div className='px-2 border-r-2 border-neutral-400'>
                          <ImSpoonKnife className='text-xl opacity-50 ' />
                        </div>
                        <div className='px-2 border-r-2 border-neutral-400'>
                          <FaDesktop className='text-xl opacity-50 ' />
                        </div>
                      </div>
                      <hr />
                      <div className='flex px-4 pb-5 space-x-2 pt-7'>
                        <h3 className='font-serif text-2xl opacity-50'>
                          Prix:
                        </h3>
                        <h1 className='font-serif text-2xl'>
                          {r?.price}Fcfa/Nuit
                        </h1>
                      </div>
                    </>
                  </a>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Room;
