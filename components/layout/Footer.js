import Link from 'next/link';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { ImLocation } from 'react-icons/im';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='py-5 bg-[#000000]'>
      <div className='grid w-2/3 grid-cols-3 mx-auto'>
        <div>
          <h1 className='text-xl text-[#eebc43] '>Suivez-Nous</h1>
          <ul className='flex pt-5 space-x-2'>
            <li className='px-2 py-2 bg-gray-900 rounded-full'>
              <Link href={'/'}>
                <a className=''>
                  <FaFacebookF className='text-2xl text-[#87a13c] hover:text-[#758d2e] opacity-80' />
                </a>
              </Link>
            </li>
            <li className='px-2 py-2 bg-gray-900 rounded-full'>
              <Link href={'/'}>
                <a>
                  <FaTwitter className='text-2xl text-[#87a13c] hover:text-[#758d2e] opacity-80' />
                </a>
              </Link>
            </li>
            <li className='px-2 py-2 bg-gray-900 rounded-full'>
              <Link href={'/'}>
                <a>
                  <RiLinkedinFill className='text-2xl text-[#87a13c] hover:text-[#758d2e] opacity-80' />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className='text-xl text-[#eebc43]'>Contact</h1>
          <ul className='flex flex-col pt-5'>
            <li>
              <Link href={'/'}>
                <a className='flex py-2 text-gray-300 opacity-70 hover:text-[#eebc43]'>
                  <ImLocation className='text-2xl text-[#87a13c] hover:text-[#758d2e]' />{' '}
                  <p className='text-[#eebc43]'>
                    55 Columbus Circle, New York, NY
                  </p>
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <a className='flex py-2  opacity-70  text-[#87a13c] hover:text-[#758d2e]'>
                  <BsTelephoneInboundFill className='text-2xl' />
                  <p className='text-[#eebc43]'>+225 0708xxxxx</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <a className='flex py-2  opacity-70 text-[#87a13c] hover:text-[#758d2e]'>
                  <MdEmail className='text-2xl ' />
                  <p className='text-[#eebc43]'>contact@domaine.com</p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className='text-xl text-[#eebc43]'>Newsletter</h1>
          <p className='py-4 text-[#eebc43]'>
            Sign up to our newsletter for exclusive offers.
          </p>
          <form className='flex px-2 py-2 bg-[#eebc43] rounded-md shadow-md shadow-black'>
            <input
              type='text'
              placeholder='Entrée votre email'
              className='grow'
            />
            <button className='px-4 py-1 text-[#eebc43] bg-red-700 rounded-xl'>
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
