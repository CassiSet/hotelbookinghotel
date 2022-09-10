import Details from '../../components/chambre/Details';
import Top from '../../components/chambre/Top';
import { getDetailsRoom } from '../../redux/actions/roomAction';
import { wrapper } from '../../redux/store';
const detail = () => {
  const title = 'chambre climatisé';
  return (
    <div className='pt-10'>
      <div>
        <Top title={title} />
      </div>
      <Details />
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getDetailsRoom(req, params.id));
    }
);

export default detail;
