import Image from 'next/image';
const About = () => {
  return (
    <div className='pb-10'>
      <div className='grid grid-cols-2'>
        <div className='py-20 px-20 '>
          <div className='w-full h-20 relative flex flex-col'>
            <h1 className='text-2xl font-mono after:absolute after:bg-[#87a13c] after:w-10 after:h-1 after:top-2/3 after:left-5 after:-translate-x-1/2 after:-translate-y-1/2 pb-14'>
              A propos de Nous
            </h1>
          </div>
          <div>
            <p>
              Maecenas feugiat mattis ipsum, vitae semper massa porttitor sit
              amet. Nulla mattis, urna et posuere ornare, neque leo dapibus
              ante, nec dignissim massa felis ad nulla donec porttitor nulla et
              tristique dignissim.
            </p>
          </div>
          <div className='py-10'>
            <button className='py-2 px-4 bg-[#87a13c]  hover:bg-[#65782a] text-[#000] transition duration-700 ease-in-out hover:text-white'>
              Savoir Plus
            </button>
          </div>
        </div>
        <div className='h-[450px] relative'>
          <Image src='/cspace.jpeg' layout='fill' objectFit='cover' />
        </div>
      </div>
      <div className='grid grid-cols-2'>
        <div className='h-[450px] relative'>
          <Image src='/cchambre.jpeg' layout='fill' objectFit='cover' />
        </div>
        <div className='py-20 px-20 '>
          <div className='w-full h-20 relative flex flex-col'>
            <h1 className='text-2xl font-mono after:absolute after:bg-[#87a13c] after:w-10 after:h-1 after:top-2/3 after:left-5 after:-translate-x-1/2 after:-translate-y-1/2 pb-14'>
              Qualité du service
            </h1>
          </div>
          <div>
            <p>
              Maecenas feugiat mattis ipsum, vitae semper massa porttitor sit
              amet. Nulla mattis, urna et posuere ornare, neque leo dapibus
              ante, nec dignissim massa felis ad nulla donec porttitor nulla et
              tristique dignissim.
            </p>
          </div>
          <div className='py-10'>
            <button className='py-2 px-4 bg-[#87a13c]  hover:bg-[#65782a] text-[#000] transition duration-700 ease-in-out hover:text-white'>
              Savoir Plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
