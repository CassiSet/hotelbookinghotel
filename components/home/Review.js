import Image from 'next/image';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const Review = () => {
  return (
    <div
      className='py-20 '
      style={{
        background:
          'linear-gradient(rgba(0, 3, 3, 0.502), rgba(0, 3, 3, 0.42)), url(/ccomment.jpeg) center/cover',
      }}
    >
      <div className='w-full items-center flex flex-col justify-center h-14 relative py-20'>
        <h1 className='text-white text-3xl font-mono after:absolute after:bg-[#87a13c] after:w-20 after:h-1 flex flex-col after:top-3/4 after:-translate-x-1/2 after:-translate-y-1/2 after:left-1/2'>
          Que Disent Nos Clients
        </h1>
      </div>
      <div className='w-4/6  flex  justify-center mx-auto  '>
        <RiDoubleQuotesL className='text-green-900 text-4xl' />
        <p className='text-center text-white'>
          Maecenas feugiat mattis ipsum, vitae semper massa porttitor sit amet.
          Nulla mattis, urna et posuere ornare, neque leo dapibus ante, nec
          dignissim massa felis ad nulla donec porttitor nulla et tristique
          dignissim.
        </p>
        <RiDoubleQuotesR className='text-green-900 text-4xl' />
      </div>
      <div className='w-4/6  flex  justify-center mx-auto pt-5'>
        <Image
          src='http://themes.quitenicestuff2.com/sohohotel/demo5/wp-content/uploads/2021/10/24-1.jpg'
          width={70}
          height={70}
          className='rounded-full'
        />
      </div>
    </div>
  );
};

export default Review;
