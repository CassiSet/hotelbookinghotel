import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../redux/actions/userAction';

// const createUser = async (user) => {
//   const response = await fetch('/api/auth/singup', {
//     method: 'POST',
//     body: JSON.stringify(user),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const data = await response.json();
//   console.log(data);

//   if (!response.ok) {
//     throw new Error(data.message || `Une erreur s'est produit`);
//   }
//   return data;
// };

const Register = () => {
  const dispatch = useDispatch();
  const route = useRouter();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpassRef = useRef();

  const { success, loading, user, error } = useSelector(
    (state) => state.userRegister
  );

  useEffect(() => {
    if (success) {
      route.push('/connexion');
    }
  }, [success]);

  const [message, setmessage] = useState('');

  const registerHandler = async (e) => {
    e.preventDefault();
    const entername = nameRef.current.value;
    const enteremail = emailRef.current.value;
    const enterpassword = passwordRef.current.value;
    const enterconfirmpassword = confirmpassRef.current.value;

    if (enterpassword !== enterconfirmpassword) {
      setmessage('Mot de passe non conforme');
    } else {
      const user = {
        name: entername,
        email: enteremail,
        password: enterpassword,
      };

      dispatch(register(user));
      // try {
      //   const result = await createUser({
      //     name: entername,
      //     email: enteremail,
      //     password: enterpassword,
      //   });
      // } catch (error) {
      //   console.log(error);
      // }
    }
  };
  return (
    <div className='w-1/2 pt-2 mx-auto bg-[#000] rounded-md shadow-lg shadow-slate-600'>
      <form
        className='flex flex-col px-20 py-5 space-y-5'
        onSubmit={registerHandler}
      >
        <h3 className='text-xl font-bold text-center text-red-700 bg-white '>
          {message}
        </h3>
        <label>
          <input
            type='email'
            placeholder='Votre adresse email'
            className='w-full border'
            ref={emailRef}
          />
        </label>
        <label>
          <input
            type='text'
            placeholder='Entrée votre nom'
            className='w-full border'
            ref={nameRef}
          />
        </label>
        <label>
          <input
            type='password'
            placeholder='Saisissez un mot de passe'
            className='w-full border'
            ref={passwordRef}
          />
        </label>
        <label>
          <input
            type='password'
            placeholder='Confirmer le mot de passe'
            className='w-full border'
            ref={confirmpassRef}
          />
        </label>

        <button
          type='submit'
          className='py-1 text-white transition duration-500 ease-in-out bg-[#eebc43] hover:bg-[#d09e2a]'
        >
          Inscription
        </button>
        <div className='text-white '>
          <p>
            Avez-vous un compte?
            <span
              className='px-1 cursor-pointer hover:text-red-200'
              onClick={() => route.push('/connexion')}
            >
              Connexion
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
