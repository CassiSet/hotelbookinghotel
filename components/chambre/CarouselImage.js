import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const CarouselImage = () => {
  const { room } = useSelector((state) => state.DetailsRooms);
  const { image } = room;
  return (
    <Carousel showThumbs={true} autoPlay={true} showStatus={false}>
      {image?.map((i) => (
        <div className='h-[450px]' key={i._id}>
          <img
            src={i?.replace('/public\\', '/')}
            alt='image'
            className='h-full '
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselImage;
