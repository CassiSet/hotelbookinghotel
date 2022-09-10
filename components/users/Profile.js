import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../redux/actions/userAction';

// import { useSession, getSession } from 'next-auth/react';
// import { useEffect, useState } from 'react';
const Profile = () => {
  // 2eme possibilité
  //   const [isloading, setIsloading] = useState(true);

  //   useEffect(() => {
  //     getSession().then((session) => {
  //       if (!session) {
  //         window.location.href = '/connexion';
  //       } else {
  //         setIsloading(false);
  //       }
  //     });
  //   }, []);

  //   if (isloading) {
  //     return <p>loading...</p>;
  //   }
  // premiere possibilité
  //   const { data: session, status } = useSession();

  //   if (status === 'loading') {
  //     return <p>loading...</p>;
  //   }

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

  const dispatch = useDispatch();
  const route = useRouter();

  const { success, loading, user, error } = useSelector(
    (state) => state.userRegister
  );

  useEffect(() => {
    if (success) {
      route.push('/connexion');
    }
  }, [success]);

  const [message, setmessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const registerHandler = async (e) => {
    e.preventDefault();

    if (confirmpassword !== password) {
      setmessage('Mot de passe non conforme');
    } else {
      dispatch(register({ name, email, password }));
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
    <div className='w-1/2 pt-2 mx-auto mt-2 bg-green-900 rounded-md shadow-lg shadow-slate-600'>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type='text'
            placeholder='Entrée votre nom'
            className='w-full border'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <input
            type='password'
            placeholder='Saisissez un mot de passe'
            className='w-full border'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <input
            type='password'
            placeholder='Confirmer le mot de passe'
            className='w-full border'
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </label>

        <button
          type='submit'
          className='py-1 text-white transition duration-500 ease-in-out bg-red-700 hover:bg-red-800'
        >
          Mise a jour
        </button>
      </form>
    </div>
  );
};

export default Profile;
