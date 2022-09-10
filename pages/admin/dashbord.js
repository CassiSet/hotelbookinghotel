import React, { useEffect } from 'react';
import Booking from '../../components/admin/Booking';
import Container from '../../components/admin/Container';
import Revenu from '../../components/admin/Revenu';
import Top from '../../components/chambre/Top';

const Dashbord = () => {
  const title = 'Tableau de bord';
  const headerImage = '/cchambre.jpeg';
  return (
    <div className=' bg-[#f8f8f8] min-h-[100vh] pb-10'>
      <Top title={title} headerImage={headerImage} />
      <div className=' w-[70%] mx-auto'>
        <Revenu />
        <Container />
        <Booking />
      </div>
    </div>
  );
};

export default Dashbord;
