import React from 'react';
import Top from '../../components/chambre/Top';

const index = () => {
  const title = 'Contact';
  const headerImage = '/cchambre.jpeg';
  return (
    <div>
      <Top title={title} headerImage={headerImage} />
    </div>
  );
};

export default index;
