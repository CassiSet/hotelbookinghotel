import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useState } from 'react';

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);

  const dropHandler = () => {
    setDropdown(!dropdown);
  };

  const route = useRouter();
  const loginHandler = () => {
    route.push('/connexion');
  };

  const logoutHandler = () => {
    signOut();
  };
  const { data: session, status } = useSession();

  return (
    <header className='fixed z-20 items-center w-full shadow-sm  p-50 bg-[#000000] shadow-black h-[4.2rem] flex justify-center'>
      <div className='flex items-center justify-between w-4/5 m-auto text-[#eebc43] h-11'>
        <div className=' w-[250px]'>
          <Link href='/'>
            <a>
              <img src='/logo.jpeg' alt='logo' height={100} />
            </a>
          </Link>
        </div>
        <div>
          <ul className='flex space-x-8 font-mono text-xl font-[500]'>
            <li>
              <Link href='/'>
                <a className='decoration-[#87a13c] hover:underline hover:underline-offset-4'>
                  Accueil
                </a>
              </Link>
            </li>
            <li>
              <Link href='/chambre'>
                <a className='decoration-[#87a13c] hover:underline hover:underline-offset-4'>
                  Nos-Chambres
                </a>
              </Link>
            </li>
            <li>
              <Link href='/boutique'>
                <a className='decoration-[#87a13c] hover:underline hover:underline-offset-4'>
                  Nos-Services
                </a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a className='decoration-[#87a13c] hover:underline hover:underline-offset-4'>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {session ? (
            <>
              <div className='relative w-52 text-lg font-[400]'>
                <h3
                  className='flex px-2 text-xl capitalize cursor-pointer w-14  font-[500]'
                  onClick={dropHandler}
                >
                  {session.user.name} <ChevronDownIcon />
                </h3>
                <ul
                  className={
                    dropdown
                      ? ' transition duration-700 flex flex-col absolute  bg-[#101010] top-9 w-full shadow-md shadow-black px-4 py-4 space-y-1 '
                      : ' flex-col absolute  bg-[#101010] top-9 w-full shadow-md shadow-black px-4 py-4 space-y-1 hidden'
                  }
                >
                  <li>
                    <Link href='/admin/dashbord'>
                      <a
                        className='decoration-[#87a13c] hover:underline hover:underline-offset-4'
                        onClick={dropHandler}
                      >
                        Tableau de bord
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/chambre/creation'>
                      <a
                        className='decoration-[#87a13c] hover:underline hover:underline-offset-4'
                        onClick={dropHandler}
                      >
                        Ajouter une chambre
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/admin/chambre-liste'>
                      <a
                        className='decoration-[#87a13c] hover:underline hover:underline-offset-4'
                        onClick={dropHandler}
                      >
                        Liste des chambres
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/admin/chambre-liste'>
                      <a
                        className='decoration-[#87a13c] hover:underline hover:underline-offset-4'
                        onClick={dropHandler}
                      >
                        Mes réservations
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/admin/profil'>
                      <a
                        className='decoration-[#87a13c] hover:underline hover:underline-offset-4'
                        onClick={dropHandler}
                      >
                        Mon Compte
                      </a>
                    </Link>
                  </li>
                  <li>
                    <div onClick={logoutHandler}>
                      <a
                        className='cursor-pointer decoration-[#87a13c] hover:underline hover:underline-offset-4'
                        onClick={dropHandler}
                      >
                        deconnexion
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <ul className='flex space-x-4'>
              <button
                className='px-5 py-1 transition duration-700 ease-in-out bg-[#eebc43] rounded-full hover:bg-[#d3a53a] text-[#000]'
                onClick={loginHandler}
              >
                Connexion
              </button>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
