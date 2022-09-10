import { useRouter } from 'next/router';
import { getSession, signIn } from 'next-auth/react';
import { useRef, useState } from 'react';

const Login = () => {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const loginHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const payload = { email, password };

    const result = await signIn('credentials', { ...payload, redirect: false });
    if (!result.error) {
      router.replace('/');
    }
    const session = await getSession();
    console.log({ session });
  };
  return (
    <div className=' w-1/2 mx-auto  bg-[#000] shadow-lg shadow-slate-600 rounded-md pt-2'>
      <form
        className='flex flex-col px-20 py-5 space-y-5'
        onSubmit={loginHandler}
      >
        <label>
          <input
            type='email'
            placeholder='Votre adresse email'
            className='border w-full'
            ref={emailRef}
          />
        </label>
        <label>
          <input
            type='password'
            placeholder='Votre mot de passe'
            className='border w-full'
            ref={passwordRef}
          />
        </label>

        <button
          type='submit'
          className='bg-[#eebc43] text-white py-1 hover:bg-[#d09e2a] transition ease-in-out duration-500'
        >
          Connexion
        </button>
        <div className='flex justify-between text-white'>
          <p>
            <span className=' cursor-pointer hover:text-red-200'>
              Mot de passe oublié?
            </span>
          </p>
          <p>
            Nouveau client?
            <span
              className=' cursor-pointer hover:text-red-200 px-1'
              onClick={() => router.push('/inscription')}
            >
              Créer un compte
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
