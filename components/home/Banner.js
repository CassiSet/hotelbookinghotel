import Search from './Search';
const Banner = () => {
  return (
    <div
      className=' w-full  pt-10 relative '
      style={{
        height: '90vh',
      }}
    >
      <video
        src='/2.mp4'
        autoPlay
        loop
        muted
        className=' w-full h-full  object-cover'
      />
      <div
        className=' absolute inset-0'
        style={{
          background:
            'linear-gradient(rgba(0, 3, 3, 0.502), rgba(0, 3, 3, 0.42)), url(/bannie.jpg) center/cover',
        }}
      ></div>
      <div className='absolute  left-1/2 top-1/2 z-10 justify-center text-center -translate-y-1/2 -translate-x-2/4 w-1/2 grid grid-cols-1'>
        <h1 className='text-white text-5xl font-serif after:h-1 after:bg-[#87a13c] after:w-1/6  after:absolute after:top-2/3 after:left-1/2 after:-translate-x-1/2 grid grid-cols-1 justify-center items-center pb-11'>
          Canaan hills, vous dit Akwaba!!!
        </h1>
      </div>
      <div className=' absolute -translate-y-1/2 -translate-x-2/4 left-1/2 top-1/2 mt-14 px-10'>
        <Search />
      </div>
    </div>
  );
};

export default Banner;
