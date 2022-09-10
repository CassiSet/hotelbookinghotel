import Top from '../components/chambre/Top';

import Register from '../components/compte/Register';

const inscription = () => {
  const title = 'Inscription';

  return (
    <div>
      <Top title={title} />
      <div className=' w-2/3 mx-auto justify-center items-center'>
        <h1 className='text-center text-2xl py-2 font-sans'>Inscription</h1>
        <Register />
      </div>
    </div>
  );
};

export default inscription;
