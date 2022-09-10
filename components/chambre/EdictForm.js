import { useState, useEffect } from 'react';
import { createRoom } from '../../redux/actions/roomAction';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';

const EdictForm = () => {
  const dispatch = useDispatch();
  const route = useRouter();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [capacityGuess, setCapacityGuess] = useState('');
  const [internet, setInternet] = useState('');
  const [animauxAutorise, setAnimauxAutorise] = useState('');
  const [roomSize, setRoomSize] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const [uploading, setUploading] = useState(false);

  const { loading, room, success, error } = useSelector(
    (state) => state.createRooms
  );

  useEffect(() => {
    if (success) {
      route.push('/admin/chambre-liste');
    }
  }, [success]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      name,
      price,
      capacityGuess,
      internet,
      animauxAutorise,
      roomSize,
      category,
      description,
      image
    );
    dispatch(
      createRoom({
        name,
        price,
        capacityGuess,
        internet,
        animauxAutorise,
        roomSize,
        category,
        description,
        image,
      })
    );
  };

  const uploaLogoHandler = async (e) => {
    const formData = new FormData();
    for (let i = 0; i < e.target.files.length; i++) {
      formData.append('image', e.target.files[i]);
    }
    setUploading(true);

    try {
      const config = {
        Headers: {
          'Content-type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post(`/api/rooms/unpload`, formData, config);
      setImage(data.split(','));
      setUploading(false);
      console.log(data.split(','));
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <div className='w-1/3 mx-auto bg-white shadow-sm shadow-slate-600'>
      <form
        className='flex flex-col px-10 py-8 mt-5 space-y-2'
        onSubmit={submitHandler}
      >
        {error}
        <label>
          Nom de la chambre:
          <input
            placeholder='Saisissez le nom de la chambre'
            type='text'
            className='w-full py-1 border-2 rounded-sm'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Prix/nuit:
          <input
            placeholder='Saisissez le prix de la nuit'
            type='text'
            className='w-full py-1 border-2 rounded-sm'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label>
          Nombre de personnes:
          <input
            placeholder='Ajouter le nombre de personne que peut contenir la chambre'
            type='text'
            className='w-full py-1 border-2 rounded-sm'
            value={capacityGuess}
            onChange={(e) => setCapacityGuess(e.target.value)}
          />
        </label>
        <label>
          Taille de la chambre:
          <input
            placeholder='Ajouter la taille de la chambre'
            type='text'
            className='w-full py-1 border-2 rounded-sm'
            value={roomSize}
            onChange={(e) => setRoomSize(e.target.value)}
          />
        </label>
        <label>
          internet?
          <select
            className='w-full py-1 border-2 rounded-sm'
            value={internet}
            onChange={(e) => setInternet(e.target.value)}
          >
            <option value='Non'>Non</option>
            <option value='Oui'>Oui</option>
          </select>
        </label>
        <label>
          Animaux autorisé?
          <select
            className='w-full py-1 border-2 rounded-sm'
            value={animauxAutorise}
            onChange={(e) => setAnimauxAutorise(e.target.value)}
          >
            <option value='Non'>Non</option>
            <option value='Oui'>Oui</option>
          </select>
        </label>
        <label>
          Type de chambre:
          <select
            className='w-full py-1 border-2 rounded-sm'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value='simple'>simple</option>
            <option value='ventilée'>ventilée</option>
            <option value='climatisée'>climatisée</option>
          </select>
        </label>
        <label>
          Description:
          <textarea
            placeholder='Donnez une description de la chambre'
            rows='4'
            className='w-full py-1 border-2 rounded-sm'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          image:
          <input
            type='file'
            className='px-2 '
            onChange={uploaLogoHandler}
            multiple
          />
        </label>
        <button
          className='text-xl text-white bg-red-700 hover:bg-red-800'
          type='submit'
        >
          Publier
        </button>
      </form>
    </div>
  );
};

export default EdictForm;
