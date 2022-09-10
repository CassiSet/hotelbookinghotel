import Top from '../../components/chambre/Top';
import Profile from '../../components/users/Profile';
import { getSession } from 'next-auth/react';

const profil = () => {
  const title = 'profil';
  return (
    <div>
      <Top title={title} />
      <Profile />
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/connexion',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default profil;
