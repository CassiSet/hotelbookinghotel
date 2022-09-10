import EdictForm from '../../components/chambre/EdictForm';
import Top from '../../components/chambre/Top';

const edict = () => {
  const title = 'Modifier Chambre';
  return (
    <div className='py-5'>
      <Top title={title} />
      <EdictForm />
    </div>
  );
};

export default edict;
