import Top from '../components/chambre/Top';
import Login from '../components/compte/Login';

const connexion = () => {
  const title = 'Connexion';

  return (
    <div>
      <Top title={title} />
      <div className=' w-2/3 mx-auto justify-center items-center'>
        <h1 className='text-center text-2xl py-2 font-sans'>Connexion</h1>
        <Login />
      </div>
    </div>
  );
};

export default connexion;
