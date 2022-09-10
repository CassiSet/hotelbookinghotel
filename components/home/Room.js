import Image from 'next/image';
import {
  UserIcon,
  ChevronRightIcon,
  PuzzleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';
const Room = () => {
  return (
    <div className='grid grid-cols-3 gap-10 w-2/3 mx-auto pt-8'>
      <Link href={'/'}>
        <a>
          <div className=' shadow-zinc-500 pb-10 shadow-sm '>
            <div className='h-80 relative'>
              <Image src='/chome.jpeg' layout='fill' objectFit='cover' />
            </div>
            <h1 className='px-5 text-3xl capitalize py-2'>King Room</h1>
            <hr />
            <div className='flex items-center px-4 py-2'>
              <UserIcon className='h-6 text-[#65782a]' />
              <span className='opacity-80 mr-1'>Capacité: </span>{' '}
              <span>2 Aldultes</span>
            </div>
            <div className='flex items-center px-4 py-2'>
              <PuzzleIcon className='h-6 text-[#65782a]' />
              <span className='opacity-80 mr-1'>taille: </span>{' '}
              <span>5 m2</span>
            </div>
            <div className='flex items-center px-4 py-2'>
              <ShieldCheckIcon className='h-6 text-[#65782a]' />
              <span className='opacity-80 mr-1'>Type: </span>{' '}
              <span>Climatisé</span>
            </div>
            <div className='space-x-4 px-4 flex items-center'>
              <button className='py-3 px-4 bg-[#87a13c]  hover:bg-[#65782a] text-[#000] transition duration-700 ease-in-out hover:text-white'>
                30 000 Fcfa/Nuit
              </button>
              <button className='flex'>
                Voir la Chambre <ChevronRightIcon className='h-6' />
              </button>
            </div>
          </div>
        </a>
      </Link>
      <div className=' shadow-zinc-500 pb-10 shadow-sm '>
        <div className='h-80 relative'>
          <Image src='/chome1.jpeg' layout='fill' objectFit='cover' />
        </div>
        <h1 className='px-5 text-3xl capitalize py-2'>King Room</h1>
        <hr />
        <div className='flex items-center px-4 py-2'>
          <UserIcon className='h-6 text-[#65782a]' />
          <span className='opacity-80 mr-1'>Capacité: </span>{' '}
          <span>2 Aldultes</span>
        </div>
        <div className='flex items-center px-4 py-2'>
          <PuzzleIcon className='h-6 text-[#65782a]' />
          <span className='opacity-80 mr-1'>taille: </span> <span>5 m2</span>
        </div>
        <div className='flex items-center px-4 py-2'>
          <ShieldCheckIcon className='h-6 text-[#65782a]' />
          <span className='opacity-80 mr-1'>Type: </span> <span>Climatisé</span>
        </div>
        <div className='space-x-4 px-4 flex items-center'>
          <button className='py-3 px-4 bg-[#87a13c]  hover:bg-[#65782a] text-[#000] transition duration-700 ease-in-out hover:text-white  '>
            30 000 Fcfa/Nuit
          </button>
          <button className='flex'>
            Voir la Chambre <ChevronRightIcon className='h-6' />
          </button>
        </div>
      </div>
      <div className=' shadow-zinc-500 pb-10 shadow-sm '>
        <div className='h-80 relative'>
          <Image src='/homc.jpeg' layout='fill' objectFit='cover' />
        </div>
        <h1 className='px-5 text-3xl capitalize py-2'>King Room</h1>
        <hr />
        <div className='flex items-center px-4 py-2'>
          <UserIcon className='h-6 text-[#65782a]' />
          <span className='opacity-80 mr-1'>Capacité: </span>{' '}
          <span>2 Aldultes</span>
        </div>
        <div className='flex items-center px-4 py-2'>
          <PuzzleIcon className='h-6 text-[#65782a]' />
          <span className='opacity-80 mr-1'>taille: </span> <span>5 m2</span>
        </div>
        <div className='flex items-center px-4 py-2'>
          <ShieldCheckIcon className='h-6 text-[#65782a]' />
          <span className='opacity-80 mr-1'>Type: </span> <span>Climatisé</span>
        </div>
        <div className='space-x-4 px-4 flex items-center'>
          <button className='py-3 px-4 bg-[#87a13c]  hover:bg-[#65782a] text-[#000] transition duration-700 ease-in-out hover:text-white'>
            30 000 Fcfa/Nuit
          </button>
          <button className='flex'>
            Voir la Chambre <ChevronRightIcon className='h-6' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Room;
