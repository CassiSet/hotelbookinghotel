import React from 'react';
import Top from '../../components/chambre/Top';

const Index = () => {
  const title = 'Services';
  const headerImage = '/cchambre.jpeg';
  return (
    <div>
      <Top title={title} headerImage={headerImage} />
    </div>
  );
};

export default Index;
