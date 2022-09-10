import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';

const ListeAdmin = () => {
  const { room } = useSelector((state) => state.allRooms);
  return (
    <div className='w-2/3 px-5 py-5 mx-auto my-4 bg-white shadow shadow-black'>
      <table className='w-full table-auto text-start '>
        <thead>
          <tr className='text-white border-y-slate-200 border-y bg-emerald-900'>
            <th className='border-collapse text-start'>Image</th>
            <th className='border-collapse text-start'>Nom</th>
            <th className=' text-start'>Modifier</th>
            <th className=' text-start'>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {room.map((r) => (
            <>
              <tr className='py-5 border-b border-y-slate-200 '>
                <td>
                  <Image
                    src={r.image[0].replace('/public\\', '/')}
                    height={60}
                    width={60}
                  />
                </td>
                <td>{r.name}</td>

                <td className='items-center justify-center text-center '>
                  <Link href={`/modifier/${r._id}`}>
                    <a>
                      <PencilAltIcon className='cursor-pointer h-7 text-emerald-800' />
                    </a>
                  </Link>
                </td>
                <td>
                  <TrashIcon className='text-red-700 cursor-pointer h-7' />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListeAdmin;
