import Link from 'next/link';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';

const Top = ({ title, headerImage }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 3, 3, 0.502), rgba(0, 3, 3, 0.42)), url(${headerImage}) center/cover`,
      }}
      className='py-[8rem] text-center text-white '
    >
      <h1 className=' font-mono font-bold text-3xl'>Hotel-Canaan-Hills</h1>
      <ul className='flex items-center justify-center space-x-2 mt-4'>
        <li className='text-md hover:underline hover:decoration-emerald-800 hover:underline-offset-4 hover:decoration-2'>
          <Link href='/'>
            <a>Accueil</a>
          </Link>
        </li>
        <li>
          <ChevronDoubleRightIcon className='h-4' />
        </li>
        <li className='text-md '>
          <a>{title}</a>
        </li>
      </ul>
    </div>
  );
};

export default Top;
