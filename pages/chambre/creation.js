import React from 'react';
import { getSession } from 'next-auth/react';
import Top from '../../components/chambre/Top';
import CreateForm from '../../components/chambre/CreateForm';

const creation = () => {
  const title = 'Création de chambre';
  return (
    <div className='bg-gray-100 min-h-[98vh]'>
      <Top title={title} />
      <div className='pb-5'>
        <CreateForm />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session.user.isAdmin) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default creation;
