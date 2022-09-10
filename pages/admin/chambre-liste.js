import ListeAdmin from '../../components/chambre/ListeAdmin';
import Top from '../../components/chambre/Top';
import { getAllRoom } from '../../redux/actions/roomAction';
import { wrapper } from '../../redux/store';

const listChambre = () => {
  const title = 'Liste des chambre';
  return (
    <div className='min-h-[98vh] bg-gray-100'>
      <Top title={title} />
      <ListeAdmin />
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(getAllRoom(req));
    }
);

export default listChambre;
