import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  const date1 = new Date('2022-10-10T12:15:18.284Z');
  const date2 = new Date('2022-10-10T02:15:18.284Z');
  const diff = Math.abs(date1.getTime() - date2.getTime()) / 3600000;
  return (
    <div className=' '>
      <div className='flex flex-col'>
        <h3 className=' text-[20px] font-[600] font-serif'>
          Chambres bientôt disponible
        </h3>
        <p className='py-2'>Dans un instant, pour reservation!</p>
      </div>
      <hr />
      <div>
        <Link href={'/'}>
          <a>
            <div className='flex flex-wrap mt-4  justify-start space-x-2 mb-4'>
              <div className=' h-20 relative basis-[30%] rounded-md'>
                <Image
                  src='http://themes.quitenicestuff2.com/sohohotel/demo5/wp-content/uploads/2021/10/04-accommodation-featured.jpg'
                  layout='fill'
                  objectFit='cover'
                  className=' rounded-md'
                  alt='image'
                />
              </div>
              <div className='basis-[65%] flex flex-col'>
                <h3 className=' text-[20px] font-[600]  font-thin'>
                  Chambres Climatisé oli
                </h3>
                <div className='flex flex-col'>
                  <p className=' font-medium'>60000 Fcfa/nuit</p>
                  <p className=' font-[600] opacity-70 '>Disponible dans 2h</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
        <hr />
        <Link href={'/'}>
          <a>
            <div className='flex flex-wrap mt-4  justify-start space-x-2 mb-4'>
              <div className=' h-20 relative basis-[30%] rounded-md'>
                <Image
                  src='https://makaanlelo.com/tfdl_products_007/travl/react/demo/static/media/room3.88e893a2177a9eea8226.jpg'
                  layout='fill'
                  objectFit='cover'
                  className=' rounded-md'
                  alt='image'
                />
              </div>
              <div className='basis-[65%] flex flex-col'>
                <h3 className=' text-[20px] font-[600]  font-thin'>
                  Chambres Climatisé oli
                </h3>
                <div className='flex flex-col'>
                  <p className=' font-medium'>60000 Fcfa/nuit</p>
                  <p className=' font-[600] opacity-70 '>Disponible dans 2h</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
        <hr />
        <Link href={'/'}>
          <a>
            <div className='flex flex-wrap mt-4  justify-start space-x-2 mb-4'>
              <div className=' h-20 relative basis-[30%] rounded-md'>
                <Image
                  src='https://makaanlelo.com/tfdl_products_007/travl/react/demo/static/media/room2.d7f7bd89d8ddf1b58eee.jpg'
                  layout='fill'
                  objectFit='cover'
                  className=' rounded-md'
                  alt='image'
                />
              </div>
              <div className='basis-[65%] flex flex-col'>
                <h3 className=' text-[20px] font-[600]  font-thin'>
                  Chambres Climatisé oli
                </h3>
                <div className='flex flex-col'>
                  <p className=' font-medium'>60000 Fcfa/nuit</p>
                  <p className=' font-[600] opacity-70 '>Disponible dans 2h</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
        <hr />
        <Link href={'/'}>
          <a>
            <div className='flex flex-wrap mt-4  justify-start space-x-2 mb-4'>
              <div className=' h-20 relative basis-[30%] rounded-md'>
                <Image
                  src='https://makaanlelo.com/tfdl_products_007/travl/react/demo/static/media/room2.d7f7bd89d8ddf1b58eee.jpg'
                  layout='fill'
                  objectFit='cover'
                  className=' rounded-md'
                  alt='image'
                />
              </div>
              <div className='basis-[65%] flex flex-col'>
                <h3 className=' text-[20px] font-[600]  font-thin'>
                  Chambres Climatisé oli
                </h3>
                <div className='flex flex-col'>
                  <p className=' font-medium'>60000 Fcfa/nuit</p>
                  <p className=' font-[600] opacity-70 '>Disponible dans 2h</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
